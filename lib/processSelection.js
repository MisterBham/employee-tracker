// const { viewEmployees, addEmployee, updateEmployeeRole, addRole, viewAllDepartments, addDepartment } = require('./viewCommand');
const promptQuestions = require('./promptQuestions');
const { viewEmployees, viewAllDepartments, viewAllRoles } = require('./viewSelection');
const { addEmployee, addRole } = require('./addSelection');

function processSelection(answer, promptQuestions) {
    switch (answer.Selection) {
    case "View all employees":
        viewEmployees(promptQuestions);
        break;
    case "Add employee":
        addEmployee(answer, viewEmployees, promptQuestions);
        break;
    case "Update employee role":
        // updateEmployeeRole();
        break;
    case "View all roles":
        viewAllRoles(promptQuestions);
        break;
    case "Add role":
        addRole();
        break;
    case "View all departments":
        viewAllDepartments(promptQuestions);
        break;
    case "Add department":
        // addDepartment();
        break;
    case "Quit":
        process.exit(0);
    }
};

module.exports = processSelection;