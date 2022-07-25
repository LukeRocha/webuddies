require("dotenv").config();

const { default: knex } = require("knex");
const db = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
