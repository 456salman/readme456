// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what the title"
    },
    {
        type: "input",
        name: "github",
        message: "whats your github?"
    },
    {
        type: "input",
        name: "discription",
        message: "enter discription"
    },
    {
        type: "input",
        name: "installation",
        message: "tell me the steps you took to install your project"
    },
    {
        type: "input",
        name: "usage",
        message: "provide examples and instructions also include a screenshot"
    },
    {
        type: "input",
        name: "credits",
        message: "let us know who are your collaborators"
    },
    {
        type: "list",
        name: "license",
        message: "let other developers what they can and cannot do with your project",
        choices:["Appache","Boost","BSD"]
        

    },
    {
        type: "input",
        name: "features",
        message: "if your project has features list them for us"
    },
    {
        type: "input",
        name: "conptributers",
        message: "if you made an application and want other to contribute give them a guideline"
    },
    {
        type: "input",
        name: "tests",
        message: "what tests have you encountered"
    },
    {
        type: "input",
        name: "question",
        message: "questions you want to ask the reader"
    }

];


// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a fun ction to initialize app
function init() {
    inquirer.prompt(questions)
  .then(function (response) {
    //response.confirm === response.answer
     console.log('Success!')
     console.log(response)
     fs.writeFile("./test/README.md", generateMarkdown(response)
     , function(err){
    console.log(err)
     })
  });

}
// Function call to initialize app
init();








// ask the user for the readme info (inquirer)
    // -- can use inquirer
    // -- inq returns a promise so the rest of this 
    // -- should be done a 'then' block
    // take the answers and insert them into markdown text 
    // -- the answers will be a string
    // -- the markdown text will be a string
    // -- i need to insert my answers into the markdown
    // -- string concatenation 'i love ' + ' tacos
    // -- string interpolation(a type of concatenation) can be used also ex:
    // -- -- var userName = 'salman';
    // -- -- var intro = `my name is ${userName}`; // backticks not single quotes
    // const markdownText = `# i ${answers.title}

    // ## ${answer.description}`
    // create a markdown file called readme and insert the markdown text
    // -- use fs.writeFile
    // -- -- give it the name, content, and what to do next (function)












