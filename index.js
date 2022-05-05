// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the product usage"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "GNU",
            "ISC",
            "MIT"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any test instructions?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
         if(err){
             console.log(err)
            }
        console.log("succesfully wrote new file!")
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(answers){
       console.log("we have received your answers");
       writeToFile("./dist/README.md", generateMarkdown(answers));
      // let license = answers.license;
      // renderLicenseBadge(license);
   })
}

// Function call to initialize app
init();
