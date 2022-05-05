

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  } else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return " "
  } else {
    return "[License](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return ""
} else {
  return (
    `## License 
    
    This application is covered by the ${license} license.`)
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let license = answers.license
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);
  return `
  # ${answers.title}
  
  ${renderLicenseBadge(license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
   ${answers.usage}

 ${renderLicenseSection(license)}

  ## Contributers 
 ${answers.contributing}

  ## Tests
  ${answers.tests}
  ## Questions
 ${answers.questions}
  
 Find me on GitHub: [${answers.username}]

 (https://github.com/${answers.username})
 
  Email me with any questions: ${answers.email}
`;
}

module.exports = generateMarkdown;
