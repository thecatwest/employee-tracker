// import mysql2
const mysql = require("mysql2");

// import express
const express = require("express");

// add PORT designation and app express
const PORT = process.env.PORT || 3001;
const app = express();

// add express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  console.log("Connected to the employee-tracker database.")
);

// test the connection with GET test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query(`SELECT * FROM employee`, (err, rows) => {
  console.log(rows);
});

// GET single employee
app.get("/api/employee/:id", (req, res) => {
  const sql = `SELECT * FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// DELETE single employee
app.delete("/api/employee/:id", (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: message });
    } else if (!result.affectedRows) {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// CREATE new employee
// set SQL command and parameters as variables to improve legibility
// const sql = `INSERT INTO employee (id, first_name, last_name, role_id)
//     VALUES (?,?,?,?)`;
// const params = [1, "Argus", "Filch", 2];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// GET all employees
app.get("/api/employee", (req, res) => {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// add route to handle user requests that aren't supported by app
// this will override GET routes - make sure it's last of app.uses
app.use((req, res) => {
  res.status(404).end();
});

// add function that will start express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
