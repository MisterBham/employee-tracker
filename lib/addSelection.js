const db = require('../config/connection');

let addEmployee = (answer, viewEmployees, promptQuestions) => {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`, [answer.f_name, answer.l_name, answer.role_id, answer.manager_id], function (err, res) {
        viewEmployees(promptQuestions);
    });
};

let addRole = (answer, viewAllRoles, promptQuestions) => {
    db.query(`INSERT INTO role (title, salary, department_id)
    VALUES (?, ?, ?)`, [answer.roleTitle, answer.roleSalary, answer.department_id], function (err, res) {
        viewAllRoles(promptQuestions);
    });
};

let addDepartment = (answer, viewAllDepartments, promptQuestions) => {
    db.query(`INSERT INTO department (name)
    VALUES (?)`, [answer.newDepartment], function (err, res) {
        viewAllDepartments(promptQuestions);
    });
};

module.exports = { addEmployee, addRole, addDepartment };

