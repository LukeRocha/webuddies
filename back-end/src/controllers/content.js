const { default: knex } = require("knex");
const db = require("../database/db");

const getPosts = async (req, res, next) => {
  const user = {
    nickname: req.body.nickname,
  };

  const userPosts = await db.knex
    .select()
    .from("posts")
    .where("user_id", 1)
    .orderBy("id", "desc");
  console.log(...userPosts);
  try {
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
        console.log(resp);
        res.send("Content posted!");
      });
  };

  return createPost(post);
};
module.exports = { getPosts, newPost };
