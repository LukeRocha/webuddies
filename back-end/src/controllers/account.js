const db = require("../database/db");

const get = async (req, res) => {
  try {
    await res.send("Api setup");
  } catch (error) {
    console.error(error);
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

  const insertUser = async (userInputs) => {
    try {
      await db.knex
        .insert(userInputs)
        .into("users")
        .then((response) => {
          console.log(response);
          console.log(`user registered: ${userInputs.nickname}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const uniqueColumns = ["nickname", "mail"];

  const checkExistingData = async (uniqueColumns, userInputs) => {
    for (let uniqueColumn of uniqueColumns) {
      const columnCheck = await db.knex
        .select(uniqueColumn)
        .from("users")
        .where(uniqueColumn, userInputs[uniqueColumn])
        .then((response) => {
          return response.length;
        });

      if (Boolean(columnCheck) == true) {
        console.log(`this ${uniqueColumn} is already registered`);
        break;
      } else if (
        uniqueColumns[1] === uniqueColumn &&
        Boolean(columnCheck) == false
      ) {
        console.log("nao tem mais boi na linha");
        return insertUser(userInputs);
      }
    }
  };

  checkExistingData(uniqueColumns, newUser);
};
module.exports = { get, create };
