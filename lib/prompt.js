const prompt = [
    {
        type: 'list',
        name: "Selection",
        message: "What would you like to do?",
        choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"],
    },
    {
        type: 'input',
        name: 'f_name',
        message: "Please enter your first name:",
        when(answers) {
            if (answers.Selection = "Add employee") {
                return true;
            } else {
                return false;
            }
        }
    },
];

module.exports = prompt;