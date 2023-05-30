const { default: knex } = require("knex");
const db = require("../database/db");

const getPosts = async (id) => {
  try {
    const userPosts = await db.knex
      .select("id", "user_id", "post_content", "timestamp")
      .from("posts")
      .where("user_id", "=", id)
      .orderBy("timestamp", "desc");

    return userPosts;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const upDateUserPosts = async (req, res) => {
  try {
    const userPosts = await db.knex
      .select("id", "user_id", "post_content", "timestamp")
      .from("posts")
      .where("user_id", "=", req.user.userId)
      .orderBy("timestamp", "desc");

    res.send(userPosts);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const newPost = (req, res) => {
  const post = {
    user_id: req.body.user_id,
    post_content: req.body.content,
    timestamp: req.body.timestamp,
  };

  const createPost = async (postContent) => {
    try {
      await db.knex.insert(postContent).into("posts");
      console.log(`Content posted by: ${req.user.nickname}
      `);
      res.send(`Content posted`);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Erro while trying to create user post, something went wrong",
      });
    }
  };
  return createPost(post);
};

module.exports = { getPosts, newPost, upDateUserPosts };
