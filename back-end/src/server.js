require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const accountController = require("./controllers/account");
const contentController = require("./controllers/posts");
const authenticateController = require("./controllers/authentication");

const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

//User account routes
const router = express.Router();
router.post("/users/login", authenticateController.authenticateUser);
router.post("/create", accountController.create);
router.post("/users/new-post", contentController.newPost); //create a interpolation here

app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});
