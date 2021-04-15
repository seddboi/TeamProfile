const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const moreMembers = [];

function startMenu() {
    createManager();
}

function createManager() {
    console.log('Please build your team profile.');
    inquirer.prompt ([
        {
            name: 'mName',
            type: 'input',
            message: "What is your team Manager's name?"  
        },
        {
            name: 'mID',
            type: 'input',
            message: "What is your team Manager's ID Number?"  
        },
        {
            name: 'mEmail',
            type: 'input',
            message: "What is the Manager's email?",
            validate: answer => {
                // Credit for email validation: https://gist.github.com/Amitabh-K/ae073eea3d5207efaddffde19b1618e8 
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email.")
                    return false;
                };
            } 
        },
        {
            name: 'mOfficeNumber',
            type: 'input',
            message: "What is your team Manager's Office Number?"  
        }
    ]).then(answers => {
        const manager = new Manager (
            answers.mName,
            answers.mID,
            answers.mEmail,
            answers.mOfficeNumber
        );
        moreMembers.push(manager);
        establishCrew();
    });
};

function establishCrew() {
    inquirer.prompt([
        {
            name:'teamMember',
            type: 'list',
            message: 'Would you like to add more Team Members?',
            choices: ['Engineer', 'Intern', 'No more Team Members Needed']
        }
    ]).then ( choice => {
        switch(choice.teamMember) {
            case 'Engineer':
                establishEngineer();
                break;
            case 'Intern':
                establishIntern();
                break;
            case 'No more Team Members needed':
                console.log(moreMembers);
                // Add function to generate HTML page
                break; 
        };
    });
};

function establishEngineer() {
    inquirer.prompt([
        {
            name:'eName',
            type: 'input',
            message: 'What is the name of the Engineer?'
        },
        {
            name:'eID',
            type: 'input',
            message: "What is the Engineer's ID number?"
        },
        {
            name:'eEmail',
            type: 'input',
            message: "What is the Engineer's email address?"
        },
        {
            name:'eGithub',
            type: 'input',
            message: "What is the Engineer's Github Username?"
        }
    ]).then( eEntries => {
        const engineer = new Engineer (
            eEntries.eName,
            eEntries.eID,
            eEntries.eEmail,
            eEntries.eGithub
        );
        moreMembers.push(engineer);
        establishCrew();
    });
};

function establishIntern() {
    inquirer.prompt([
        {
            name:'iName',
            type: 'input',
            message: 'What is the name of the Intern?'
        },
        {
            name:'iID',
            type: 'input',
            message: "What is the Intern's ID number?"
        },
        {
            name:'iEmail',
            type: 'input',
            message: "What is the Intern's email address?"
        },
        {
            name:'iSchool',
            type: 'input',
            message: "What is the Intern's Graduation (or Currently Attending) School?"
        }
    ]).then( iEntries => {
        const intern = new Intern (
            iEntries.iName,
            iEntries.iID,
            iEntries.iEmail,
            iEntries.iSchool
        );
        moreMembers.push(intern);
        establishCrew();
    });
}; 

startMenu();