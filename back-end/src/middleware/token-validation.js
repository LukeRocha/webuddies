require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenCheck = async (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.sendStatus(400);
  }

  const token = authHeader && authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log("decoded", decoded);
    next();
  } catch (error) {
    res.json(error);
  }
};

module.exports = { tokenCheck };
