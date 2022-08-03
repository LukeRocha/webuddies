require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const accountController = require("./controllers/account");
const contentController = require("./controllers/content");
const authenticateController = require("./controllers/authenticate");

const auther = require("./controllers/auth");
const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

//User account routes
const router = express.Router();
router.post("/users/login", auther.jwtAuthenticate);
router.post("/register", accountController.create);
// Account content routes
// router.get("/profile", contentController.get);
router.post("/profile", contentController.newPost);

app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});
