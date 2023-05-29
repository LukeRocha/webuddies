const { default: knex } = require("knex");
const db = require("../database/db");

const getPosts = async (req, res) => {
  try {
    const userPosts = await db.knex
      .select("id", "user_id", "post_content", "timestamp")
      .from("posts")
      .where("user_id", "=", req.user.userId)
      .orderBy("timestamp", "desc");

    res.send(userPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Erro while trying to retrive user posts, something went wrong",
    });
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
      // .where("user_id", "=", post.user_id)
      res.send(`Content posted`);
    } catch (error) {
      res.status(500).json({
        error: "Erro while trying to retrive user posts, something went wrong",
      });
    }
  };
  return createPost(post);

  //   const insertPost = await db.knex
  //     .insert(postContent)
  //     .into("posts")
  //     .where("user_id", "=", post.user_id)
  //     .then((resp) => {
  //       res.send(`Content posted! id:${post.user_id}`);
  //     });

  //   return insertPost;
  // };
};

module.exports = { getPosts, newPost };
