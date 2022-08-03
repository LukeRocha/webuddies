require("dotenv").config();

const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { get } = require("./account");

// main functions
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "40s" });
}

function authenticateToken(req, res, next) {
  const response = {}; //middleware
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    response.message = "Token was not find";
    return res.status(401).send(response);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      response.message("Error while checking your token");
      return res.status(403).send(response);
    }

    req.user = user;
    next();
  });
}

const authUser = async (req, res) => {
  const response = {};

  try {
    const user = {
      nickname: "guest",
    };
    get(user);
  } catch (error) {
    console.log(error);
  }

  const userDbData = await db.knex
    .select()
    .from("users")
    .where("nickname", req.body.nickname);

  if (!userDbData[0]) {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
    return response;
  }

  if (await bcrypt.compare(req.body.password, userDbData[0].password)) {
    const accessToken = generateAccessToken(userDbData[0]);
    const refreshToken = jwt.sign(
      userDbData[0],
      process.env.REFRESH_TOKEN_SECRET
    );

    response.userData = userDbData[0];
    response.tokens = { accessToken: accessToken, refreshToken: refreshToken };
    res.status(201).send(response);
    console.log("logged in!");
  } else {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
  }
  return response;
};

const checkJwtValidation = async (req, res, token) => {
  const response = {};
  const accessToken = req.body.token;

  if (token == null) {
    response.serverMessage = "Token is not valid";
    res.status(401).send(response);
  }
};

const jwtAuthenticate = async (req, res) => {
  const response = {};
  const userCredentials = {
    nickname: req.body.nickname,
    passsword: req.body.password,
  };

  const databaseCredentials = await db.knex
    .select("nickname", "password")
    .where("nickname", userCredentials.nickname);

  if (!databaseCredentials[0]) {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
    return response;
  }

  if (
    await bcrypt.compare(
      userCredentials.password,
      databaseCredentials[0].password
    )
  ) {
    const accessToken = generateAccessToken(userCredentials);
    const refreshToken = jwt.sign(
      userCredentials,
      process.env.REFRESH_TOKEN_SECRET
    );

    response.accessToken = accessToken;
    response.refreshToken = refreshToken;
    res.status(201).send(response);
    console.log(response);
  }
};

module.exports = { authUser, authenticateToken, jwtAuthenticate };
