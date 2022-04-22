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
    phone: req.body.phone,
    password: req.body.password,
    profile_picture: req.body.profile_picture,
    user_status: req.body.user_status,
    is_deleted: 0,
  };
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

module.exports = { get, create };

// const reqModel = {
//   nickname: "master",
//   first_name: "master",
//   last_name: "adm",
//   birth: "1990-01-01",
//   city: "Santos",
//   country: "Brazil",
//   mail: "master@mail.com",
//   phone: "99999999999",
//   password: "123456",
//   profile_picture: "",
//   user_status: "Master user",
//   is_deleted: "0",
// };
