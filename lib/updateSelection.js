const db = require('../config/connection');

let updateEmployeeRole = (answer, viewEmployees, promptQuestions) => {
    db.query(`UPDATE employee SET role_id = ${answer.newRole} WHERE ${answer.employeeSelection} = id`, function (err, res) {
        viewEmployees(promptQuestions);
    });

};

module.exports = updateEmployeeRole;
