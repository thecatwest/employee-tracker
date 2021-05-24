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

function userSelection(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please make a selection from the following options:',
            name: 'userAnswers',
            choices: [
                new inquirer.Separator(),
                'View all Employees',
                'View all Roles',
                'View all Departments',
                new inquirer.Separator(),
                'Update an Employee',
                'Update a Role',
                new inquirer.Separator(),
                'Add a New Employee',
                'Add a New Department',
                'Add a New Role',
                'Add a New Manager'
            ]

        }
    ])
    // then use else/if conditional based on userAnswers 
    .then(({ userAnswers }) => {
        if (userAnswers === 'View all Employees') {
            const sqlUserSelect = `SELECT * FROM employee;`;

            // output query results
            databaseOutput(sqlUserSelect);
        }
        else if (userAnswers === 'View all Roles') {
            const sqlUserSelect = `SELECT * FROM roles;`;

            databaseOutput(sqlUserSelect);
        }
    })
}




