require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");

const followNewFriend = async (idObject) => {
  try {
    await db.knex
      .insert(idObject)
      .into("friendships")
      .then((resp) => {
        console.log(resp);
        console.table(resp);
      });
  } catch (error) {
    console.log(error);
  }
};

const searchUsers = async (req, res) => {
  try {
    await db.knex
      .select("nickname", "profile_picture", "first_name", "last_name", "id")
      .from("users")
      .where("nickname", "like", `%${req.params.nickname}%`)
      .then((resp) => {
        return res.send(resp);
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { followNewFriend, searchUsers };
