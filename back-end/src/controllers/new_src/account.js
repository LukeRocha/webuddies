require("dotenv").config();
const { default: knex } = require("knex");
const db = require("../../database/db");
const bcrypt = require("bcrypt");
const friendshipController = require("../friendships");

const create = async (req, res) => {
  const createHashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  };
  const newUser = {
    nickname: req.body.nickname.toLowerCase(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    birth: req.body.birth,
    city: req.body.city,
    mail: req.body.mail,
    password: await createHashPassword(req.body.password),
    profile_picture: req.body.profile_picture,
    user_status: req.body.user_status,
    is_deleted: 0,
  };

  const inserUserInDb = async (user) => {
    const searchExistingDataInDbColumn = async (column) => {
      const dbCheck = await db.knex
        .select(column)
        .from("users")
        .where(column, req.body[column]);

      return dbCheck.length;
    };
  };
};
