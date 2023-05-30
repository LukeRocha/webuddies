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
      const usersSearch = await db.knex
        .select("nickname", "profile_picture", "first_name", "last_name", "id")
        .from("users")
        .where("nickname", "like", `${req.params.nickname}%`);

      res.send(usersSearch);
    } else {
      return res.send([]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error while trying to retrive data",
    });
  }
};

const fetchFriendships = async (id) => {
  const friendships = [];

  try {
    const queryFriendships = await db.knex
      .select("target_friend_id")
      .from("friendships")
      .where("main_user_id", "=", id);

    for (let friendship of queryFriendships) {
      const result = await db.knex
        .select(
          "nickname",
          "first_name",
          "last_name",
          "profile_picture",
          "user_status"
        )
        .from("users")
        .where("id", "=", friendship.target_friend_id);
      friendships.push(...result);
    }

    return friendships;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const accessUserProfile = async (req, res) => {
  const userDataFromDb = await db.knex
    .select(
      "nickname",
      "first_name",
      "last_name",
      "profile_picture",
      "user_status",
      "city",
      "id"
    )
    .from("users")
    .where("nickname", "=", req.params.nickname);

  const postsDataFromDb = await db.knex
    .select("posts.*", "users.id as user_id1")
    .table("posts")
    .innerJoin("users", "users.id", "posts.user_id")
    .where("users.nickname", "=", req.params.nickname);
  userDataFromDb.push(postsDataFromDb);
  res.send(userDataFromDb);
};
module.exports = {
  followNewFriend,
  searchUsers,
  fetchFriendships,
  accessUserProfile,
};
