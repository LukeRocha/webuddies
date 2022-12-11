/* eslint-disable no-undef */
require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  const createHashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  };

  const newUser = {
    nickname: req.body.nickname.toLowerCase(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birth: req.body.birth,
    city: req.body.city,
    mail: req.body.mail,
    password: await createHashPassword(req.body.password),
    profile_picture: req.body.profile_picture,
    user_status: req.body.user_status,
    is_deleted: 0,
  };

  const searchExistingDataInDbColumn = async (column) => {
    const dbCheck = await db.knex
      .select(column)
      .from("users")
      .where(column, req.body[column]);

    return dbCheck.length;
  };

  const insertUserInDb = async (userInputs) => {
    const uniqueColumns = ["nickname", "mail"];
    let errors = {};

    for (column of uniqueColumns) {
      if (await searchExistingDataInDbColumn(column)) {
        errors[column] = `this ${column} already exists`;
      }
    }

    if (Object.keys(errors).length === 0) {
      await db.knex
        .insert(userInputs)
        .into("users")
        .then((resp) =>
          console.log(`Account has been created: ${userInputs.nickname}`)
        );
      res.send(`Account has been created: ${userInputs.nickname}`);
    }
    if (Object.keys(errors).length > 0) {
      res.send(errors);
    }
  };
  return insertUserInDb(newUser);
};

const dataFromLoggedUser = async (req, res) => {
  const dataFromDb = await db.knex
    .select(
      "nickname",
      "first_name",
      "last_name",
      "profile_picture",
      "user_status",
      "city",
      "id"
    )
    .from("users")
    .where("nickname", "=", req.user.nickname);
  res.send(dataFromDb);
};

const accessUserProfile = async (req, res) => {
  const userDataFromDb = await db.knex
    .select(
      "nickname",
      "first_name",
      "last_name",
      "profile_picture",
      "user_status",
      "city",
      "id"
    )
    .from("users")
    .where("nickname", "=", req.params.nickname);

  const postsDataFromDb = await db.knex
    .select("id", "user_id", "post_content", "timestamp")
    .from("posts")
    .where("user_id", "=", "1");
  console.log(postsDataFromDb);
  const accessedUserData = {
    userData: userDataFromDb,
    userPosts: postsDataFromDb,
  };
  userDataFromDb.push(postsDataFromDb);
  res.send(userDataFromDb);
};

const edit = async (req, res) => {
  const editedData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_status: req.body.user_status,
  };

  const nickname = req.user.nickname;

  try {
    const insertEditedDataInDb = await db.knex
      .update(editedData)
      .table("users")
      .where("nickname", nickname);
    const result = await db.knex
      .select(
        "nickname",
        "first_name",
        "last_name",
        "profile_picture",
        "user_status",
        "id"
      )
      .from("users")
      .where("nickname", "=", nickname)
      .then((resp) => {
        res.json(resp);
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create, accessUserProfile, dataFromLoggedUser, edit };
