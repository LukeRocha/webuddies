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

const tokenTest = async (req, res) => {
  console.log("function has worked, here is your token validation");
  console.log(req.headers.authorization);
};

module.exports = { create, tokenTest };
