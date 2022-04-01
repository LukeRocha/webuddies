const db = require("../database/db.js");

const get = async (req, res) => {
  try {
    await res.send("Api setup");
  } catch (error) {
    console.error(error);
  }
};

const create = async (req, res) => {};

module.exports = { get };
