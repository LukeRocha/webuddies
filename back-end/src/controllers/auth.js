require("dotenv").config();

const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { get } = require("./account");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "40s" });
}
const jwtAuthenticate = async (req, res) => {
  const response = {};
  const userCredentials = {
    nickname: req.body.nickname,
    passsword: req.body.password,
  };

  const databaseCredentials = await db.knex
    .select("nickname", "password")
    .from("users")
    .where("nickname", req.body.nickname);

  if (!databaseCredentials[0]) {
    response.ServerMessage =
      "User has not found or password is wrong, try again";
    res.status(401).send(response);
    return response;
  }

  if (
    await bcrypt.compare(req.body.password, databaseCredentials[0].password)
  ) {
    const accessToken = generateAccessToken(userCredentials);
    const refreshToken = jwt.sign(
      userCredentials,
      process.env.REFRESH_TOKEN_SECRET
    );

    response.accessToken = accessToken;
    response.refreshToken = refreshToken;
    console.log(response);
    res.status(201).send(response);
  }
};

module.exports = { jwtAuthenticate };
