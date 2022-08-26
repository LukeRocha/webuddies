require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenCheck = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
  console.log("primeiro log", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.sendStatus(400);
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = { tokenCheck };
