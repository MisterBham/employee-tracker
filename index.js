const sequelize = require('./config/connection');
const inquirer = require('inquirer');
// const Department = require('./models/department');
const Employee = require('./models/employee');
// const Role = require('./models/role');

// SETUP DIFFERENT ACTIONS
let viewAllEmployees = () => {
    let allEmployees = Employee.findAll()
        .then((data) => {
            console.table(data);
            init();
        })
};

let addEmployee = () => {
    res.send(`asajdsfasdf`);
};
let updateEmployeeRole = () => {
    res.send(`asajdsfasdf`);
};
let addRole = () => {
    res.send(`asajdsfasdf`);
};
let viewAllDepartments = () => {
    res.send(`asajdsfasdf`);
};
let addDepartment = () => {
    res.send(`asajdsfasdf`);
};
let quit = () => {
    process.exit(0);
};

//  SYNC WITH DB 
sequelize.sync({ force: true }).then(() => {
    init();
});

const init = () => {
    console.info(`ASCII ART HERE`);
    inquirer
        .prompt([
            {
                type: 'list',
                name: "OpeningMessage",
                message: "What would you like to do?",
                choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"],
            }
        ])
        .then((choice) => {
            switch (choice) {
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Quit":
                    quit();
                    break;
            }
        })
        .catch((err) => {
            if (err) throw err;
        });
};