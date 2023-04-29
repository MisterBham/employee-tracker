// Template: change everything to employee
import inquirer from 'inquirer';

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

inquirer
  .prompt([
    'What would you like to do?'
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

module.exports = router;
