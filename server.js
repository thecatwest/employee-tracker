// import mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

const database = require("./db/db.sql");
const mysql = require("mysql2");

// connect application to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username
  user: "root",
  // MySQL password
  password: "",
  database: "employee_tracker",
});

// TODO
// function to prompt user to choose between:
// view all departments
// view all employees
// view all roles
// update employee
// update role
// add department
// add employee
// add role




