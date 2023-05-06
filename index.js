
const ASCII = require('./lib/ASCII');
const promptQuestions = require('./lib/promptQuestions');


//  SYNC WITH DB
const db = require('./config/connection');

db.connect(function (err) {
    if (err) throw err;
    init();
});

const init = () => {
ASCII();
promptQuestions();
};

// // SETUP DIFFERENT ACTIONS
// let viewEmployees = () => {
//     db.query(`SELECT * from employee`, function (err, res) {
//         console.log('This is from viewEmployees()');
//         console.table(res);
//         init();
//     });
// };

// let addEmployee = () => {
//     db.query(`INSERT INTO employee VALUES (${res.first_name}, ${res.last_name}, ${role_id}, ${manager_id})`, function (err, res) {
//         console.log('This is from addEmployee()');
//         console.table(res);
//     });
// };