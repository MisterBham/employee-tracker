const db = require('../config/connection');

let addEmployee = (answer, viewEmployees, promptQuestions) => {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`, [answer.f_name, answer.l_name, answer.role_id, answer.manager_id], function (err, res) {
        viewEmployees(promptQuestions);
    });
};

let addRole = (answer, viewEmployees, promptQuestions) => {
    db.query(`INSERT INTO role (title, salary, department_id)
    VALUES (?, ?, ?)`, [answer.title, , ], function (err, res) {
        viewEmployees(promptQuestions);
    });
};

module.exports = { addEmployee, addRole };
