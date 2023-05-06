const util = require('util');
const validateAnswer = require('./validateAnswer');
const populateRoles = require('./populateRoles');
const promptQuestions = require('./promptQuestions');
const db = require('../config/connection.js');

const query = util.promisify(db.query).bind(db);

const prompt = [
    // Starting Question
    {
        type: 'list',
        name: "Selection",
        message: "What would you like to do?",
        choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"],
    },
    // Adding an employee
    {
        type: 'input',
        name: 'f_name',
        message: "Please enter your first name:",
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
        message: "Please enter your last name:",
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
        name: 'role',
        message: "What is name of the new role?",
        when(answers) {
            if (answers.Selection === "Add Role") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    }
];

module.exports = prompt;