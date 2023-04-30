const { stringify } = require('querystring');
const sequelize = require('./config/connection');
const inquirer = require('inquirer');
// const Department = require('./models/department');
// const Employee = require('./models/employee');
// const Role = require('./models/role');

// SETUP DIFFERENT ACTIONS
// let viewAllEmployees = () => {
//     console.log(`not working`);
//     // let allEmployees = Employee.findAll()
//     //     .then((data) => {
//     //         console.table(data);
//     //         init();
//     //     })
// };

// let addEmployee = () => {
//     res.send(`asajdsfasdf`);
// };
// let updateEmployeeRole = () => {
//     res.send(`asajdsfasdf`);
// };
// let addRole = () => {
//     res.send(`asajdsfasdf`);
// };
// let viewAllDepartments = () => {
//     res.send(`asajdsfasdf`);
// };
// let addDepartment = () => {
//     res.send(`asajdsfasdf`);
// };
// let quit = () => {
//     process.exit(0);
// };

//  SYNC WITH DB 
sequelize.sync({ force: true }).then(() => {
    console.log(`Synced with SQL`);
    init();
});

const init = () => {
    console.info(`ASCII ART HERE`);
    inquirer
        .prompt([
            {
                type: 'list',
                name: "Selection",
                message: "What would you like to do?",
                choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"],
            }
        ])
        .then((selection) => {
            console.log(JSON.stringify(selection).substr(13, 35));
            switch (selection) {
                case "View all employees":
                    return console.log(`Viewing all employees`);
                // viewAllEmployees();
                case "Add employee":
                    return console.log(`Viewing all employees`);
                // addEmployee();
                case "Update employee role":
                    return console.log(`Viewing all employees`);
                // updateEmployeeRole();
                case "Add role":
                    return console.log(`Viewing all employees`);
                // addRole();
                case "View all departments":
                    return console.log(`Viewing all employees`);
                // viewAllDepartments();
                case "Add department":
                    return console.log(`Viewing all employees`);
                // addDepartment();
                case "Quit":
                    return console.log(`Viewing all employees`);
                // quit();
            }
        }, (err) => {
            console.error(err);
        })
        .catch((err) => {
            if (err) throw err;
        });

};