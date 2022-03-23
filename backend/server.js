const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`server is running ${PORT}`));
