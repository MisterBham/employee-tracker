const db = require('./config/connection');

let updateEmployeeRole = () => {
    db.query(`UPDATE employee SET role_id =  `, function (err, res) {
        console.table(res);
    });
};
module.exports = { viewDepartments };

