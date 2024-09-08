require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { tokenCheck } = require("../middleware/token-validation");

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30d" });
}

async function authenticateUser(req, res) {
  let response = {};
  const { nickname, password } = req.body;
  const dbUserData = await db.knex
    .select(
      "id",
      "nickname",
      "first_name",
      "last_name",
      "profile_picture",
      "user_status",
      "password"
    )
    .from("users")
    .where("nickname", req.body.nickname);

  console.log("user: " + dbUserData[0].nickname);
  //this verification is not working
  if (!dbUserData[0]) {
    res
      .status(401)
      .send({
        serverMessage: "User has not found or password is wrong, try again",
      });
    return {
      serverMessage: "User has not found or password is wrong, try again",
    };
  }

  if (await bcrypt.compare(password, dbUserData[0].password)) {
    const userId = dbUserData[0].id;
    const accessToken = generateAccessToken({ userId, nickname });

    response.accessToken = accessToken;
    delete dbUserData[0].password;
    response.dbUserData = dbUserData;

    // here we can bring only the token, and proceed to profile page!
    res.status(201).send(response);
  } else {
    response.ServerMessage = "Incorrect password. Please try again.";
    res.status(401).send(response);
    return response;
  }
}

//Tip: The dummy test user password is "11111111"
module.exports = { authenticateUser };
