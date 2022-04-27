const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./util/generateMarkdown');

// questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What is the project about? Give a detailed descrition',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What does the user need to install before runnign this app?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How is the app used?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What liscense is being used?',
        name: 'License',
        choices: ["apache-2.0", "mit", "isc", "gpl"]
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'What commands are needed to test this app?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Contact info for inquiries?',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    }
]

//function to write ReadME file
function writeToFile(fileName, data) {

    fs.writeFileSync(path.join(process.cwd(), fileName), data), function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('Success')
        }
    }
}

//function to initialize program 
function init() {
  
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers)
            writeToFile('README.md', generateMarkdown(answers));
          
        })

}

//function call to initialize program 
init();