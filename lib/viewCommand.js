const db = require('./config/connection');

let viewDepartments = () => {
    db.query(``, function (err, res) {
        console.table(res);
    });
};

// SELECT department.id AS Dept_ID, department.name AS Dept_Name FROM department GROUP BY id

let viewRoles = () => {
    db.query(``, function (err, res) {
        console.table(res);
    });
};

// SELECT role.id AS Role_ID, role.title AS Role_Title, role.salary AS Role_Salary, role.department_id AS Role_DeptID FROM role GROUP BY department_id

let viewEmployees = () => {
    db.query(`SELECT employee.id AS Employee_ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, employee.role_id AS Role_ID, employee.manager_id AS Manager_ID FROM employee GROUP BY manager_id`, function (err, res) {
        console.table(res);
    });
};

module.exports = { viewDepartments, viewRoles, viewEmployees };

