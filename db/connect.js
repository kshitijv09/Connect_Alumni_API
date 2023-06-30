const mysql = require("mysql2");

const db = mysql.createConnection({
  /* user: "root",
  host: "localhost",
  password: "Surajpura@1",
  database: "auth", */
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = db;
