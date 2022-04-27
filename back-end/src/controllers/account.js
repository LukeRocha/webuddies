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

  const uniqueColumns = ["nickname", "mail"];

  const insertUser = async () => {
    try {
      const createNewUser = await db.knex
        .insert(newUser)
        .into("users")
        .then((response) => {
          console.log(`user registered ${newUser.nickname}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const checkExistingData = async (column, data) => {
    await db.knex
      .select(column)
      .from("users")
      .where(column, data)
      .then((response) => {
        if (response.length === 0) {
          checkExistingData("mail", newUser.mail);
        } else if (response.length > 1) {
          console.log(`${column} already registered`);
        } else {
          return insertUser;
        }
      });
  };

  return checkExistingData("nickname", newUser.nickname);
};

module.exports = { get, create };
