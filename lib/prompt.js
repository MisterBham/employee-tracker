const { validateAnswer } = require('./validateAnswer');
const { populateRoles } = require('./populateRoles');

const prompt = [
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
        type: 'input',
        name: 'role_id',
        message: "What role will this employee be performing?",
        choices: populateRoles,
        when(answers) {
            if (answers.Selection === "Add employee") {
                return true;
            } else {
                return false;
            }
        },
        validate: validateAnswer
    },
];

module.exports = prompt;