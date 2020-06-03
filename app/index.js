const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'Enter a project title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your project version',
        name: 'version'
    },
    {
        type: 'input',
        message: 'Enter a basic description for your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter basic installation methods for your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter basic usage metohds for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter a License for your project if you have one',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter Tests Here',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter FAQs here',
        name: 'faqs'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
    // {
    //     type: 'confirm',
    //     message: 'Do you have any contributers you would like to add?',
    //     name: 'confirmContributers',
    // },
];

const contributerQuestions = [
    {
        type: 'number',
        message: 'How many contributers would you like to add?',
        name: 'contributersNum',
    },
    {
        type: 'input',
        message: 'Enter GitHub link to contributer',
        name: 'contributerGit',
    }
];

function contributerInit() {
    inquirer
        .prompt(contributerQuestions)
        .then( response => {
            console.log(response);
        })
};

function writeToFile(fileName, data) {

    fs.writeFile( fileName, generateMarkdown(data), function(err){
        if(err) console.log(err);
        else console.log('success!')
    })
};

function init() {

    inquirer
        .prompt(questions)
        .then( response => {
            writeToFile('TEST.md', response);
        })
};

init();