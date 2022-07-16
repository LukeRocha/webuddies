const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const accountController = require("./controllers/account");
const contentController = require("./controllers/content");
const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

const router = express.Router();
router.post("/users/login", accountController.logIn);
router.get("/login", accountController.get);
router.get("/profile", contentController.getPosts);
router.post("/register", accountController.create);
router.post("/profile", contentController.newPost);
app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});

//$2b$10$MREuzPrZblVEl7CjETKdeOX8hNQsbyIsmUajLGQTIHbIEw6I.Z9zq pass
