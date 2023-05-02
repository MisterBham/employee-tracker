const db = require('../config/connection.js');

const populateRoles = () => {
    const roles = {};

    db.query(`SELECT title FROM role`, function (err, res) {
        console.log('\n');
        console.table(res);
    })
    .then((res) => {
        res.map {
            return {
                title: res.title,
                department: res.department_id,
            }
        }
    })
}

// async function retrieveRole(response) {
//     let roleList;
//     let returnedValue = await db.promise().query(`
//     SELECT * FROM role
//     `).then( (data) => {
//         roleList = data[0].map(data => {
//             return {
//                 name: data.title,
//                 value: data.id
//             }
//         })
//         return roleList
//     }).catch(err=>{
//         console.log(err);
//     })
//     return returnedValue
// };

module.exports = { populateRoles };