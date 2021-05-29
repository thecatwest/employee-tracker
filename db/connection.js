
const mysql = require("mysql2");

// connect application to MySQL database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: "root",
    // MySQL password
    password: "poop",
    database: "employee_tracker",
  },
  console.log("Connected to the Hogwarts School of Witchcraft and Wizardry Employee Tracker database.")
);

module.exports = db;
