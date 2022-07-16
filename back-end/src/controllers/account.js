const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");

const get = async (req, res, next) => {
  const userData = await db.knex.select().from("users").where("id", "1");
  try {
    res.send(...userData);
  } catch (error) {
    console.log(error);
  }
};

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
  return insertUserInDb(newUser);
};

const logIn = async (req, res) => {
  const response = {};
  const userDbData = await db.knex
    .select()
    .from("users")
    .where("nickname", req.body.nickname);

  if (userDbData.length == 0) {
    response.message = "User has not found or password is wrong, try again";
    res.status(401).send(response);
  }

  try {
    if (await bcrypt.compare(req.body.password, userDbData[0].password)) {
      response.userData = userDbData[0];
      response.message = "Success";
      res.status(201).send(response);
      console.log("funcionou");
    }
  } catch (error) {
    response.message = "Not allowed";
    res.status(401).send(response);
  }
};

module.exports = { get, create, logIn };
