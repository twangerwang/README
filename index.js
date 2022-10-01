// Install the needed packages
const inquirer = require('inquirer');
const fs = require('fs');
const {generateReadme} = require('./utils/utils.js');

//Prompts for the needed inputs for readme generation
inquirer.prompt([
{
    type:'input',
    name: 'title',
    message: 'What is the title of the Readme?',
},
{
    type:'input',
    name: 'description',
    message: 'What is the description?',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
},
{
    type:'input',
    name: 'usage',
    message: 'What is the usage information',
},
{
    type:'input',
    name: 'contribution',
    message: 'What are the contribution guidelines?',
},
{
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
},
{
    type:'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software','Creative Commons Zero v1.0 Universal', 'Eclipse Public', 'GNU Affero General Public v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public', 'The Unlicense'],
},
{
    type:'input',
    name: 'github',
    message: 'What is your GitHub user name?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
}
]).then((answers)=>{
    //generate readme file
    const readmeFile = generateReadme(answers);
    fs.writeFile('./utils/readme.md', readmeFile, (err)=>
    err? console.log(err):console.log('readme.md successfully created!')
    );
});

