const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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


// var adam = new Manager("AdamMan", 1, "ad@am.com", "101");
// console.log(adam.getName(), adam.getId(), adam.getEmail(), adam.getOfficeNumber(), adam.getRole());
// var bob = new Engineer("BobEngi", 7, "Bob@Bob.Bob", "TheGitHub");
// console.log(bob.getName(), bob.getId(), bob.getEmail(), bob.getGithub(), bob.getRole());
// var carl = new Intern("CarlInt", 100, "Carl@Carl.edu", "School of School");
// console.log(carl.getName(), carl.getId(), carl.getEmail(), carl.getSchool(), carl.getRole());

let team = [];
let namePrompt = {
    type: "input",
    message: "Name?",
    name: "name"
};
let idPrompt = 
{
    type: "input",
    message: "ID?",
    name: "id"
};
let emailPrompt = 
{
    type: "input",
    message: "Work email?",
    name: "email"
};

addManager(); //This is our initial prompt, since each team needs one manager, and one only.



function recurringPrompt(){
inquirer
  .prompt([
    {
      type: "list",
      message: "What role would you like to add? Select one below, or select 'done' to export your team.",
      name: "role",
      choices: ["Engineer", "Intern", "Done"]
    }
])
    .then((response) =>{
        switch (response.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                complete();
                break;
        }

    })
}

function addManager(){
    console.log("Welcome to the teambuilding exercise, and congratulations on your managerial position! \n Please enter your information below.");
    inquirer.prompt([namePrompt, idPrompt, emailPrompt, {
        type: "input",
        message: "Office number?",
        name: "officeNumber"
    }]).then( function(response){
        team.push({
            name: response.name,
            id: response.id,
            email: response.email,
            officeNumber: response.officeNumber
        });
        recurringPrompt();
    })
    }

function addEngineer(){
inquirer.prompt([namePrompt, idPrompt, emailPrompt, {
    type: "input",
    message: "Github name?",
    name: "github"
}]).then( function(response){
    team.push({
        name: response.name,
        id: response.id,
        email: response.email,
        github: response.github
    });
    recurringPrompt();
})
}

function addIntern(){
    inquirer.prompt([namePrompt, idPrompt, emailPrompt, {
        type: "input",
        message: "School?",
        name: "school"
    }]).then( function(response){
        team.push({
            name: response.name,
            id: response.id,
            email: response.email,
            school: response.school
        });
        recurringPrompt();
    })
}

function complete(){
    console.log(team);
}