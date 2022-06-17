const { default: knex } = require("knex");
const db = require("../database/db");

const get = async (req, res) => {
  const userData = await db.knex.select().from("users").where("id", "1");
  try {
    res.send(userData);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  const newUser = {
    nickname: req.body.nickname,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birth: req.body.birth,
    city: req.body.city,
    mail: req.body.mail,
    password: req.body.password,
    profile_picture: req.body.profile_picture,
    user_status: req.body.user_status,
    is_deleted: 0,
  };

  const searchDbColumn = async (column) => {
    const dbCheck = await db.knex
      .select(column)
      .from("users")
      .where(column, req.body[column]);

    return dbCheck.length;
  };

  const insertUser = async (userInputs) => {
    const uniqueColumns = ["nickname", "mail"];
    let errors = {};
    const objectErrorsCounter = Object.keys(errors).length;

    for (column of uniqueColumns) {
      if (await searchDbColumn(column)) {
        errors[column] = `this ${column} already exists`;
      }
    }

    if (objectErrorsCounter === 0) {
      console.log("porra");
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
  return insertUser(newUser);
};

module.exports = { get, create };
