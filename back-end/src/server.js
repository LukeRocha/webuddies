require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Controllers
const accountController = require("./controllers/account");
const postsController = require("./controllers/posts");
const authenticationController = require("./controllers/authentication");
const tokenMiddleware = require("./middleware/token-validation");

const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

//User account routes
const router = express.Router();
router.post("/users/login", authenticationController.authenticateUser);
router.get(
  "/users/get-posts-data",
  tokenMiddleware.tokenCheck,
  postsController.getPosts
);

router.post("/create", accountController.create);
router.post("/users/new-post", postsController.newPost);

app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});
