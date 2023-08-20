// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
    type: 'input',
    message: 'Please enter your project title.',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Please enter a description.',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Please enter installation instructions.',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'Please enter usage information.',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Please enter contribution guidelines.',
    name: 'contribution',
    },
    {
    type: 'input',
    message: 'Please enter test instructions.',
    name: 'test',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['MIT', 'others', 'no license'],
    },
    {
    type: 'input',
    message: 'Please enter your github username.',
    name: 'github',
    },
    {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    },
  ])
  .then((data) => {
    fs.writeFile('../../mod-9-README-generator/README.md', `# Table of Contents
  1. [${data.title}](#${data.title})
  2. [Description](#Description)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [Contribution Guidelines](#Contribution-Guidelines)
  6. [License](#License)
  7. [Test Instructions](#Test-Instructions)
  8. [Github Page](#Github-Username)
  9. [Contact Info](#Email-Address)
  # ${data.title}
    
  ## Description
  ${data.description}
    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## Contribution Guidelines
  ${data.contribution}
    
  ## License
  ${data.license}
    
  ## Test Instructions
  ${data.test}
    
  ## Github Username
  https://github.com/${data.github}
    
  ## Email Address
  If you have any questions or concerns please reach out to me at ${data.email}
  `, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });
