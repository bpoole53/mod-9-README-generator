// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please provide a link to your bio.',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'Please provide your linkedin URL.',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'Please provide your github URL.',
      name: 'github',
    },
  ])
  .then((data) => {
    fs.writeFile('README.md', /*put the data here*/'test', (err) =>
        err ? console.log(err) : console.log('Successfully created html file!')        
    );
  });
