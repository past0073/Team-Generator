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
const { doesNotMatch } = require('assert');

const employees = [];

//Manager Prompts
function managerPrompts() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's id?",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your manager's email?",
        validate: function (email) {
            if (email.includes("@" && ".")) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number?",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    ]).then(function({name, id, email, officeNumber}) {
        const manager = new Manager(name, id, email, officeNumber)
        employees.push(manager);
        newMember();
    })
};

//New member prompt
function newMember() { 
    inquirer.prompt([ 
    {
        type: 'list',
        name: 'nextMember',
        message: 'Which type of team member would you like to add?',
        choices:['Engineer', 'Intern', "I don't want to add more team members"]
    },
    ]).then(function(response) {
        if (response.nextMember === 'Engineer') {
            return engineerPrompt();
        }
        else if (response.nextMember ==='Intern') {
            return internPrompt();
        }
        else {
            fs.writeFile(outputPath, render(employees), function (err) {
            err ? console.log(err) : console.log("Great! Your team has been generated!")
            })}
        });  
};
    
 //Engineer prompts
 function engineerPrompt() {
     inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your engineer?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        validate: function (email) {
            if (email.includes("@" && ".")) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github username?"
    },
    ]).then(function({name, id, email, github}) {
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        newMember();
    })
    };

//Intern prompts
function internPrompt() {
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your intern?'
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?",
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?",
        validate: function (email) {
            if (email.includes("@" && ".")) {
                return true;
            }
            else {
                return "Please enter a valid email."
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?"
    },
    ]).then(function({name, id, email, school}) {
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        newMember();
    })
};

managerPrompts();

// ]).then((response) => {
//     render([]);


//     )
// });
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
