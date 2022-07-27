require("dotenv").config();

const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
}

const authUser = async (req, res) => {
  const response = {};

  const userDbData = await db.knex
    .select()
    .from("users")
    .where("nickname", req.body.nickname);
  console.log(userDbData[0]);

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
    response.ServerMessage = "Password is not correct";
    res.status(401).send(response);
  }
  return response;
};

module.exports = { authUser };
