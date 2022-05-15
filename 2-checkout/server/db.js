const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
  // debug: true
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>

    // db.queryAsync("DROP DATABASE IF EXISTS checkout"),
    // db.queryAsync("CREATE DATABASE IF NOT EXISTS checkout"),
    // db.queryAsync("USE checkout"),



    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(32) NOT NULL, address1 VARCHAR(64) NOT NULL, address2 VARCHAR(64),
      city VARCHAR(32) NOT NULL, state VARCHAR(32) NOT NULL, zip VARCHAR(10) NOT NULL)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
