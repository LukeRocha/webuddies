const knex = require("knex")({
  client: "pg",
  connection: {
    user: "postgres",
    password: "postgres",
    database: "webuddies",
    host: "127.0.0.1",
    port: 5432,
  },
});

module.exports = { knex };
