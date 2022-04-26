const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const fileNameSuffix = Math.floor(Math.random() * 99);

const generateMarkdown = require('../util/generateMarkdown');    

// questions for user
// const questions = [{
    inquirer.prompt([
        {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title',
}, {
    type: 'input',
    message: 'What is the project about? Give a detailed descrition', 
    name:  'Description',
}, {
    type: 'input',
    message: 'Table of Contents',
    name: 'Table of Contents',
}, {
    type: 'input',
    message: 'What does the user need to install before runnign this app?',
    name: 'Installation',
}, {
    type: 'input',
    message: 'How is the app used?',
    name: 'Usage',
}, {
    type: 'input',
    message: 'What liscense is being used?',
    name: 'License',
}, {
    type: 'input',
    message: 'Who contributed to this project?',
    name: 'Contribution',
}, {
    type: 'input',
    message: 'What commands are needed to test this app?',
    name: 'Tests',
}, {
    type: 'input',
    message: 'Contact info for inquiries?',
    name: 'Questions',
}, {
    type: 'input',
    message: 'What is your github username?',
    name: 'Username',
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email',
}, {
    
}

])
.then((data) => {
    const fullReadmePath = path.resolve(__dirname, `../tmp/${README_FILENAME}`);

    fs.writeFile(fullReadmePath, generateMarkdown(data), (err) =>
      err
        ? console.log(err)
        : console.log(`Your ${README_FILENAME} has been generated at ${fullReadmePath}! 🚀`)
// function to write ReadME file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log('Success')
//         }
//     })
// }

// //function to initialize program 
// function init() {
//     inquirer.prompt(questions)
//         .then(function(data){
//             writeToFile('README.md', generateMarkdown(data));
//             console.log(data)
//         })
    )
})

//function call to initialize program 
// init()