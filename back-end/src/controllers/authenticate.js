require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { get } = require("./account");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d" });
}

const jwtAuthenticate = async (req, res) => {
  const response = {};
  const { nickname, password } = req.body;

  const databaseCredentials = await db.knex
    .select("nickname", "password")
    .from("users")
    .where("nickname", nickname);

  if (!databaseCredentials[0]) {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
    return response;
  }

  if (await bcrypt.compare(password, databaseCredentials[0].password)) {
    const accessToken = generateAccessToken(nickname);
    const refreshToken = jwt.sign(nickname, process.env.REFRESH_TOKEN_SECRET);

    response.accessToken = accessToken;
    response.refreshToken = refreshToken;
    res.status(201).send(response);
  }
};

function verifyTokenValidation(req, res, next) {
  const response = {};
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    response.message = "Invalid Token";
    return res.status(401).send(response);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      response.message("Invalid Token");
      return res.status(403).send(response);
    }

    req.user = user;
    next();
  });
}

async function authenticateUser(req, res) {
  const response = {};
  const { nickname, password } = req.body;

  const dbUserData = await db.knex
    .select(
      "id",
      "nickname",
      "first_name",
      "last_name",
      "mail",
      "profile_picture",
      "user_status",
      "password"
    )
    .from("users")
    .where("nickname", req.body.nickname);

  if (!dbUserData[0]) {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
    return response;
  }

  if (await bcrypt.compare(password, dbUserData[0].password)) {
    const userId = dbUserData[0].id;
    const accessToken = generateAccessToken({ userId, nickname });
    const refreshToken = jwt.sign(nickname, process.env.REFRESH_TOKEN_SECRET);

    response.accessToken = accessToken;
    response.refreshToken = refreshToken;
    delete dbUserData[0].password;
    response.dbUserData = dbUserData;

    res.status(201).send(response);
  }
}

module.exports = { authenticateUser };
