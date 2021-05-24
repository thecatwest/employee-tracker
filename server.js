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
                'Edit an Employee Role',
                new inquirer.Separator(),
                'Add a New Employee',
                'Add a New Department',
                'Add a New Role'
            ]

        }
    ])
    // then use else/if conditional based on userAnswers 
    .then(({ userAnswers }) => {
        // if user selects "view all employees"
        if (userAnswers === 'View all Employees') {
            // set variable with SQL to return all employees
            const sqlUserSelect = `SELECT * FROM employee;`;

            // output query results
            databaseOutput(sqlUserSelect);
        }
        // if user selects "view all roles"
        else if (userAnswers === 'View all Roles') {
            // set variable with SQL to return all roles
            const sqlUserSelect = `SELECT * FROM roles;`;

            databaseOutput(sqlUserSelect);
        }
        // if user selects "view all departments"
        else if (userAnswers === 'View all Departments') {
            // set variable with SQL to return all departments
            const sqlUserSelect = `SELECT * FROM departments;`;

            databaseOutput(sqlUserSelect);
        }
        else if (userAnswers === 'Edit an Employee Role') {
            // prompt user for info regarding employee edit
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Please enter the ID number of the employee you wish to edit:',
                    name: 'empId',
                    filter: Number
                },
                {
                    type: 'list',
                    message: "Does the employee have a new manager? If so, select an option:",
                    name: 'manId',
                    choices: [
                        'Albus Dumbledore',
                        'Minerva McGonagall',
                        'None'
                    ],
                    filter: function(option){
                        if(option === 'Albus Dumbledore'){return 1}
                        if(option === 'Minerva McGonagall'){return 2}
                        if(option === 'None'){return NULL}
                    },
                },
                {
                    type: 'list',
                    message: "What is the employee's new role?",
                    name: 'newRole',
                    choices: [
                        'Caretaker',
                        'Grounds Keeper',
                        'Head Master',
                        'Head Mistress',
                        'Professor I',
                        'Professor II',
                        'Professor III',
                    ],
                    filter: function(option){
                        if(option === 'Caretaker'){return 1}
                        if(option === 'Grounds Keeper'){return 2}
                        if(option === 'Head Master'){return 3}
                        if(option === 'Head Mistress'){return 4}
                        if(option === 'Professor I'){return 5}
                        if(option === 'Professor II'){return 6}
                        if(option === 'Professor III'){return 7}
                    }
                }
            ]).then(({ empId, manId, newRole }) => {
                const sqlUserSelect = `UPDATE employee SET manager_id = ${manId}, role_id = ${newRole} WHERE id = ${empId};`

                databaseOutput(sqlUserSelect);
            })
        }
    })
}




