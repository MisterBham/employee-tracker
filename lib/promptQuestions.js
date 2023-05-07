const prompt = require('./prompt');
const inquirer = require('inquirer');
const processSelection = require('./processSelection');

function promptQuestions() {
    inquirer.prompt(prompt)
    .then((answer => {
        processSelection(answer, promptQuestions);
    }))
};

module.exports = promptQuestions;