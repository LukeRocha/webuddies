const { Pool } = require("pg");

const pool = new Pool({
  user: "{lucas}",
  host: "{localhost}",
  database: "{database}",
  password: "{postgres}",
  port: "{3300}",
});
