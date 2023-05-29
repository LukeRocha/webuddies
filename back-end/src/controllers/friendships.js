require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../database/db");

const followNewFriend = async (req, res) => {
  const friendshipObject = {
    main_user_id: req.user.userId,
    target_friend_id: req.body.target_friend_id,
  };

  try {
    await db.knex.insert(friendshipObject).into("friendships");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro while trying to friendship user, something went wrong",
    });
  }
};

const searchUsers = async (req, res) => {
  try {
    if (req.params.nickname !== "") {
      await db.knex
        .select("nickname", "profile_picture", "first_name", "last_name", "id")
        .from("users")
        .where("nickname", "like", `${req.params.nickname}%`)
        .then((resp) => {
          return res.send(resp);
        });
    } else {
      return res.send([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro while trying to retrive data",
    });
  }
};

const fetchFriendships = async (id, res) => {
  const friendshipData = [];

  const followingFriends = await db.knex
    .select("target_friend_id")
    .from("friendships")
    .where("main_user_id", "=", id);

  for (let buddy of followingFriends) {
    const result = await db.knex
      .select(
        "nickname",
        "first_name",
        "last_name",
        "profile_picture",
        "user_status"
      )
      .from("users")
      .where("id", "=", buddy.target_friend_id);
    friendshipData.push(...result);
  }

  return friendshipData;
};
module.exports = { followNewFriend, searchUsers, fetchFriendships };
