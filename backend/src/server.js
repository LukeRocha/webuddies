const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.port || process.env.PORT || 3700;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options("*", cors());

const router = express.Router();
router.get("/api", (req, res) => {
  try {
    res.send("Api setup");
  } catch (error) {
    console.error(error);
  }
});

router.post("/register", (req, res) => {
  const testUser = {
    name: req.body.name,
    pass: req.body.pass,
  };

  try {
    console.log(testUser);
  } catch (error) {
    console.error(error);
  }
});

app.use(router);
app.listen(port, () => {
  console.log("Server is running...");
});
