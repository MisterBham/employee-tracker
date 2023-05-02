
const ASCII = require("./lib/ASCII");
const prompt = require('./lib/prompt');
const inquirer = require('inquirer');

//  SYNC WITH DB
const db = require('./config/connection');

db.connect(function (err) {
    if (err) throw err;
    init();
});

const init = () => {
ASCII();
inquirer.prompt(prompt)
.then((answer) => {
    console.log(answer);
            switch (answer.Selection) {
                case answer.Selection = "View all employees":
                    console.log(answer.Selection);
                    // viewAllEmployees();
                    break;
                case answer.Selection = "Add employee":
                    console.log(answer.Selection);
                    // addEmployee();
                    break;
                case answer.Selection = "Update employee role":
                    console.log(answer.Selection);
                    // updateEmployeeRole();
                    break;
                case answer.Selection = "Add role":
                    console.log(answer.Selection);
                    // addRole();
                    break;
                case answer.Selection = "View all departments":
                    console.log(answer.Selection);
                    // viewAllDepartments();
                    break;
                case answer.Selection = "Add department":
                    console.log(answer.Selection);
                    // addDepartment();
                    break;
                case answer.Selection = "Quit":
                    console.log(answer.Selection);
                    process.exit(0);
            }
})
};

// SETUP DIFFERENT ACTIONS
// let viewAllEmployees = () => {
//     return console.log(`not working`);
// };

// let addEmployee = () => {
//     return console.log(`not working`);
// };
// let updateEmployeeRole = () => {
//     return console.log(`not working`);
// };
// let addRole = () => {
//     return console.log(`not working`);
// };
// let viewAllDepartments = () => {
//     return console.log(`not working`);
// };
// let addDepartment = () => {
//     return console.log(`not working`);
// };
// let quit = () => {
//     return console.log(`not working`);
//     // process.exit(0);
// };
