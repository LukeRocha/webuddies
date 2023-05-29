require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const accountController = require("./controllers/account");
const postsController = require("./controllers/posts");
const authenticationController = require("./controllers/authentication");
const friendshipController = require("./controllers/friendships");
const tokenMiddleware = require("./middleware/token-validation");

const port = process.env.port || process.env.PORT || 3700;
// I don't remember this command and I don't give a fuck, to kill a used process: sudo kill -9 `sudo lsof -t -i:3700`

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

const router = express.Router();

//GET ROUTES
router.get(
  "/users/get-posts-data",
  tokenMiddleware.tokenCheck,
  postsController.getPosts
);

router.get("/user/get-user-data", accountController.dataFromLoggedUser);

router.get(
  "/profile/token-check",
  tokenMiddleware.tokenCheck,
  accountController.dataFromLoggedUser
);

router.get("/users/:nickname", accountController.accessUserProfile);
router.get("/users/search/:nickname", friendshipController.searchUsers);

// POST ROUTES
router.post("/users/login", authenticationController.authenticateUser);
router.post("/create-account", accountController.create);
router.post(
  "/users/new-post",
  tokenMiddleware.tokenCheck,
  postsController.newPost
);
router.post(
  "/newFriend",
  tokenMiddleware.tokenCheck,
  friendshipController.followNewFriend
);

// PUT ROUTES
router.put("/account/edit", tokenMiddleware.tokenCheck, accountController.edit);

app.use(router);
app.listen(port, () => {
  console.log("server is running...");
});
