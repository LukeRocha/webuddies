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

  const errorMesages = {
    nickname: "This nickname is already in use",
    mail: "This e-mail is already in use",
  };

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
          return insertUser();
        } else {
          console.log(`${column} already registered`);
        }
      });
  };

  checkExistingData("nickname", newUser.nickname);
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
//   password: "123456",
//   profile_picture: "",
//   user_status: "Master user",
//   is_deleted: "0",
// };
