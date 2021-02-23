const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require('inquirer/lib/objects/choices');

inquirer.prompt([
    {
        type: 'input',
        name: 'manager',
        message: 'What is the name of your manager?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is your manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your manager's email?"
    },
    //Add email validation
    {
        type: 'input',
        name: 'managerOffice',
        message: "What is your manager's office number?"
    },
    {
        type: 'list',
        name: 'nextMember',
        message: 'Which type of team member would you like to add?',
        choices:['Engineer', 'Intern', "I don't want to add more team members"]
    },
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the name of your engineer?'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is your engineer's id?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is your engineer's Github username?"
    },
    {
        type: 'list',
        name: 'nextMember1',
        message: 'Which type of team member would you like to add?',
        choices:['Engineer', 'Intern', "I don't want to add more team members"]
    },
    {
        type: 'input',
        name: 'intern',
        message: 'What is the name of your intern?'
    },
    {
        type: 'input',
        name: 'internID',
        message: "What is your intern's id?"
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is your intern's school?"
    },
//Add as many members as the user desires
//Create an output folder (team.html)
//github should link to github


]).then((response) => {
    console.log('hi');
});
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
