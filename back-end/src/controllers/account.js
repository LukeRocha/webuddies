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
          console.log(`user registered: ${userInputs.nickname}`);
        });
    } catch (error) {
      const err = await res.status(200).json(error.detail);
    }
  };

  insertUser(newUser);
};

module.exports = { get, create };
