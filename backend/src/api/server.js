const express = require("express");
const app = express();
const port = process.env.port || process.env.PORT || 3700;

app.get("/api", (req, res) => {
  try {
    res.send("Api setup");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
