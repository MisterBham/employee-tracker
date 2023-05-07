
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
