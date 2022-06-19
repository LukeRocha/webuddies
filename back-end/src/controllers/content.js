const { default: knex } = require("knex");
const db = require("../database/db");

const getPosts = async (req, res) => {
  const userPosts = await db.knex.select().from("posts").where("user_id", "1");

  try {
    console.log(userPosts);
    res.send(userPosts);
  } catch (error) {
    console.log(error);
  }
};

const newPost = (req, res) => {
  const post = {
    user_id: req.body.user_id,
    post_content: req.body.content,
    timestamp: req.body.timestamp,
  };

  const createPost = async (postContent) => {
    await db.knex
      .insert(postContent)
      .into("posts")
      .then((resp) => {
        res.send("Content posted!");
      });
  };

  return createPost(post);
};
module.exports = { getPosts, newPost };
