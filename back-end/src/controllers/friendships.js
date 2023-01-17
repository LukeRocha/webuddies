require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");

const followNewFriend = async (req, res) => {
  console.log(req.body);
  const friendshipObject = {
    main_user_id: req.user.userId,
    target_friend_id: req.body.target_friend_id,
  };

  try {
    await db.knex
      .insert(friendshipObject)
      .into("friendships")
      .then((resp) => {
        console.log(resp);
      });
  } catch (error) {
    console.log(error);
  }
};

const searchUsers = async (req, res) => {
  try {
    if (req.params.nickname !== " ") {
      await db.knex
        .select("nickname", "profile_picture", "first_name", "last_name", "id")
        .from("users")
        .where("nickname", "like", `${req.params.nickname}%`)
        .then((resp) => {
          return res.send(resp);
        });
    } else {
      return res.send("");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { followNewFriend, searchUsers };
