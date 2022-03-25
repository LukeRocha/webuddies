const express = require("express");
const port = process.env.port || process.env.PORT || 3300;

const app = express();

app.listen(port, () => {
  console.log("Server is running");
});
