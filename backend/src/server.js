const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const accountController = require("./controllers/account");
const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

const router = express.Router();

router.get("/api", accountController.get);

app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});
