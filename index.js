// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your Full Name?",
    },
    {
        type: "input",
        name:"title",
        message: "What is the title of your project",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?",
    },
    {
        type: "input",
        name: "installation",
        message: "How would a user install this program?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter any specific guidelines for contributors",
    },
    {
        type: "input",
        name: "usage",
        message: "How would a user use this program?",
    },
    {
        type: "list",
        name: "license",
        messgage: "Select the license you would like to use",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "None"],

    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any details regarding a test for this application",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address",
    },
    {
        type: "input",
        name: "readmeTitle",
        message: "Enter name for your readme file (do not use .md)",
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) =>
 fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err
    ? console.log(err)
    : console.log("Congratulations you generated your readme file!")
);

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(`${answers.readmeTitle}.md`, answers);
    });
};

// Function call to initialize app
init();
