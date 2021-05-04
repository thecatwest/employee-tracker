// import mysql2
const mysql = require('mysql2');

// import express
const express = require('express');

// add PORT designation and app express
const PORT = process.env.PORT || 3002;
const app = express();

// add express.js middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// connect application to MySQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL password
        password: 'poop',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee-tracker database.')
);

// test the connection with GET test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(err);
    console.log(rows);
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