const db = require('../config/connection');
// const menu = require('./promptQuestions');

function viewEmployees(promptQuestions) {
    db.query(`SELECT * from employee`, function (err, res) {
        console.table(res);
        promptQuestions();
    });
};

function viewAllDepartments(promptQuestions) {
    db.query(`SELECT * from department`, function (err, res) {
        console.table(res);
        promptQuestions();
    });
};

function viewAllRoles(promptQuestions) {
    db.query(`SELECT * from role`, function (err, res) {
        console.table(res);
        promptQuestions();
    });
}


module.exports = { viewEmployees, viewAllDepartments, viewAllRoles };

