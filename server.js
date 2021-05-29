// import mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { response } = require("express");
const cTable = require('console.table');
// const database = require("./db/db.sql");

// connect application to MySQL database
const db = mysql.createConnection({
  host: "localhost",
  // MySQL username
  user: "root",
  // MySQL password
  password: "poop",
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

function userSelection() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please make a selection from the following options:",
        name: "userAnswers",
        choices: [
          new inquirer.Separator(),
          "View all Employees",
          "View all Roles",
          "View all Departments",
          new inquirer.Separator(),
          "Edit an Employee Role",
          new inquirer.Separator(),
          "Add a New Employee",
          "Add a New Department",
          "Add a New Role",
        ],
      },
    ])
    // then use else/if conditional based on userAnswers
    .then(({ userAnswers }) => {
      // if user selects "view all employees"
      if (userAnswers === "View all Employees") {
        // set variable with SQL to return all employees
        const sqlUserSelect = `SELECT * FROM employee;`;

        // output query results
        databaseOutput(sqlUserSelect);
      }
      // if user selects "view all roles"
      else if (userAnswers === "View all Roles") {
        // set variable with SQL to return all roles
        const sqlUserSelect = `SELECT * FROM roles;`;

        databaseOutput(sqlUserSelect);
      }
      // if user selects "view all departments"
      else if (userAnswers === "View all Departments") {
        // set variable with SQL to return all departments
        const sqlUserSelect = `SELECT * FROM department;`;

        databaseOutput(sqlUserSelect);
      }
      // if user selects "edit employee role"
      // start new inquirer prompt to gather new data
      else if (userAnswers === "Edit an Employee Role") {
        // prompt user for info regarding employee edit
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "Please enter the ID number of the employee you wish to edit:",
              name: "empId",
              filter: Number,
            },
            {
              type: "list",
              message:
                "Does the employee have a new manager? If so, select an option:",
              name: "manId",
              choices: ["Albus Dumbledore", "Minerva McGonagall", "None"],
              filter: function (option) {
                if (option === "Albus Dumbledore") {
                  return 1;
                }
                if (option === "Minerva McGonagall") {
                  return 2;
                }
                if (option === "None") {
                  return NULL;
                }
              },
            },
            {
              type: "list",
              message: "What is the employee's new role?",
              name: "newRole",
              choices: [
                "Caretaker",
                "Grounds Keeper",
                "Head Master",
                "Head Mistress",
                "Professor I",
                "Professor II",
                "Professor III",
              ],
              filter: function (option) {
                if (option === "Caretaker") {
                  return 1;
                }
                if (option === "Grounds Keeper") {
                  return 2;
                }
                if (option === "Head Master") {
                  return 3;
                }
                if (option === "Head Mistress") {
                  return 4;
                }
                if (option === "Professor I") {
                  return 5;
                }
                if (option === "Professor II") {
                  return 6;
                }
                if (option === "Professor III") {
                  return 7;
                }
              },
            },
          ])
          .then(({ empId, manId, newRole }) => {
            const sqlUserSelect = `UPDATE employee SET manager_id = ${manId}, role_id = ${newRole} WHERE id = ${empId};`;

            databaseOutput(sqlUserSelect);
          });
      }
      // if user selects "add new employee"
      // inquirer prompt to collect new data
      else if (userAnswers === "Add a New Employee") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter employee's FIRST NAME:",
              name: "firstName",
            },
            {
              type: "input",
              message: "Please enter employee's LAST NAME:",
              name: "lastName",
            },
            {
              type: "list",
              message:
                'Please select a MANAGER for this employee. If the employee does not have an assigned manager, select "none":',
              name: "manId",
              choices: ["Albus Dumbledore", "Minerva McGonagall", "None"],
              filter: function (option) {
                if (option === "Albus Dumbledore") {
                  return 1;
                }
                if (option === "Minerva McGonagall") {
                  return 2;
                }
                if (option === "None") {
                  return 3;
                }
              },
            },
            {
              type: "list",
              message: "Please select a ROLE for the employee:",
              name: "newRole",
              choices: [
                "Caretaker",
                "Grounds Keeper",
                "Head Master",
                "Head Mistress",
                "Professor I",
                "Professor II",
                "Professor III",
              ],
              filter: function (option) {
                if (option === "Caretaker") {
                  return 1;
                }
                if (option === "Grounds Keeper") {
                  return 2;
                }
                if (option === "Head Master") {
                  return 3;
                }
                if (option === "Head Mistress") {
                  return 4;
                }
                if (option === "Professor I") {
                  return 5;
                }
                if (option === "Professor II") {
                  return 6;
                }
                if (option === "Professor III") {
                  return 7;
                }
              },
            },
          ])
          .then(({ firstName, lastName, newRole, manId }) => {
            const sqlUserSelect = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('${firstName}', '${lastName}', '${newRole}', '${manId}');`;

            databaseOutput(sqlUserSelect);
          });
      }

      // if user selects "add new department"
      // use inquirer prompt to collect new data
      else if (userAnswers === "Add a New Department") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter a DEPARTMENT NAME:",
              name: "newDept",
            },
          ])
          .then(({ newDept }) => {
            const sqlUserSelect = `INSERT INTO department (department_name)
        VALUES ('${newDept}');`;

            databaseOutput(sqlUserSelect);
          });
      }
      // if user selects "add new role"
      // use inquirer prompt to collect new data
      else if (userAnswers === "Add a New Role") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter a ROLE TITLE:",
              name: "newTitle",
            },
            {
              type: "input",
              message: "Please enter a SALARY. Use two decimal places:",
              name: "newSalary",
            },
            {
              type: "list",
              message: "Please select a DEPARTMENT:",
              name: "newDept",
              choices: ["Management", "Facilities", "Teaching"],
              filter: function (option) {
                if (option === "Management") {
                  return 1;
                }
                if (option === "Facilities") {
                  return 2;
                }
                if (option === "Teaching") {
                  return 3;
                }
              },
            },
          ])
          .then(({ newTitle, newSalary, newDept }) => {
            const sqlUserSelect = `INSERT INTO roles (title, salary, department_id)
        VALUES('${newTitle}', '${newSalary}', '${newDept}');`;

            databaseOutput(sqlUserSelect);
          });
      }
    })
    .catch((error) => {
      console.log(`An Error has occurred: ${error}`);
    });
}

function databaseOutput(userOutput) {
  db
    .promise()
    .query(userOutput)
    .then(([result]) => {
      console.log("-----------------------------------");
      console.table(result);
      console.log("-----------------------------------");
      // prompt user to return to menu
      inquirer
        .prompt([
          {
            type: "confirm",
            message: "Would you like to return to the main menu?",
            name: "menuReturn",
          },
        ])
        .then((response) => {
          if (response.menuReturn) {
            userSelection();
          } else {
            console.log(
              "Thank you for using the Hogwarts School of Witchcraft and Wizardry Employee Tracker. Goodbye!"
            );
          }
        });
    })
    .catch(console.log);
}

userSelection();
