const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

// Not needed if using Sequelize
// const mysql = require('mysql2');

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: 'p@ssw0rd',
//         database: 'movie_db'
//     },
//     console.log(`Connected to the movie_db database.`)
// );


