const promptQuestions = require('./promptQuestions');
const { viewEmployees, viewAllDepartments, viewAllRoles } = require('./viewSelection');
const { addEmployee, addRole, addDepartment } = require('./addSelection');
const updateEmployeeRole = require('./updateSelection');

function processSelection(answer, promptQuestions) {
    switch (answer.Selection) {
    case "View all employees":
        viewEmployees(promptQuestions);
        break;
    case "Add employee":
        addEmployee(answer, viewEmployees, promptQuestions);
        break;
    case "Update employee role":
        // viewEmployees, promptQuestions
        updateEmployeeRole(answer, viewEmployees, promptQuestions);
        break;
    case "View all roles":
        viewAllRoles(promptQuestions);
        break;
    case "Add role":
        addRole(answer, viewAllRoles, promptQuestions);
        break;
    case "View all departments":
        viewAllDepartments(promptQuestions);
        break;
    case "Add department":
        addDepartment(answer, viewAllDepartments, promptQuestions);
        break;
    case "Quit":
        process.exit(0);
    }
};

module.exports = processSelection;