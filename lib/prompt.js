const validateAnswer = require('./validateAnswer');
const promptQuestions = require('./promptQuestions');
const db = require('../config/connection.js');

const util = require('util');
const query = util.promisify(db.query).bind(db);

const prompt = [
    // Starting Question
    {
        type: 'list',
        name: "Selection",
        message: "Select from the options below:",
        choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"],
    },
    // Adding an employee
    {
        type: 'input',
        name: 'f_name',
        message: "Please enter employees first name:",
        when(answers) {
            if (answers.Selection === "Add employee") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'input',
        name: 'l_name',
        message: "Please enter employees last name:",
        when(answers) {
            if (answers.Selection === "Add employee") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'list',
        name: 'role_id',
        message: "What role will this employee be performing?",
        choices: async () => {
            return await query(`SELECT id value, title name FROM role`);
        },
        when(answers) {
            if (answers.Selection === "Add employee") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'list',
        name: 'manager_id',
        message: "Who will this employee be managed by?",
        choices: async () => {
            return await query(`SELECT id value, concat(first_name," ",last_name) name FROM employee`);
        },
        when(answers) {
            if (answers.Selection === "Add employee") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    // Adding a role
    {
        type: 'input',
        name: 'roleTitle',
        message: "What is name of the new role?",
        when(answers) {
            if (answers.Selection === "Add role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: "What is the salary of this new role?",
        when(answers) {
            if (answers.Selection === "Add role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'list',
        name: 'department_id',
        message: "To which department does this role belong to?",
        choices: async () => {
            return await query(`SELECT id value, name name FROM department`);
        },
        when(answers) {
            if (answers.Selection === "Add role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    // Adding a department
    {
        type: 'input',
        name: 'newDepartment',
        message: "What is the name of the new department?",
        choices: async () => {
            return await query(`SELECT id value, name name FROM department`);
        },
        when(answers) {
            if (answers.Selection === "Add department") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    // Updating an employee role
    {
        type: 'list',
        name: 'employeeSelection',
        message: "Which employee is changing roles?",
        choices: async () => {
            return await query(`SELECT id value, concat(first_name," ",last_name) name FROM employee`);
        },
        when(answers) {
            if (answers.Selection === "Update employee role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
    {
        type: 'list',
        name: 'newRole',
        message: "What is the new role this employee will be working?",
        choices: async () => {
            return await query(`SELECT id value, title name FROM role`);
        },
        when(answers) {
            if (answers.Selection === "Update employee role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
];

module.exports = prompt;