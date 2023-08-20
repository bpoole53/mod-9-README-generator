// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
const fs = require('fs');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Table of Contents
  [${data.title}](#${data.title})
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [Contribution Guidelines](#Contribution-Guidelines)
  [License](#License)
  [Test Instructions](#Test-Instructions)
  [Github Username](#Github-Username)
  [Email Address](#Email-Address)
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
  `;
}

module.exports = generateMarkdown();
