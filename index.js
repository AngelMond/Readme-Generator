//Importing modules
const inquirer = require('inquirer');
const fs = require('fs');
const badge = require('./assets/badges');

//Badges
const HTML = badge.html;
const CSS = badge.css;
const JavaScript = badge.JavaScript;
const Bootstrap = badge.bootstrap;
const Tailwind = badge.tailwind;
const SASS = badge.sass;
const NodeJS = badge.nodejs;
const VueJS = badge.vuejs;
const React = badge.react;
const Angular = badge.angular;
const Java = badge.java;
const TypeScript = badge.typeScript;
const PHP = badge.php;
const Phyton = badge.phyton;
const Github = badge.github;
const Git = badge.git;
const MongoDB = badge.mongoDB;
const MySQL = badge.mysql;




function readmeGenerator(){

console.log(' ----------------------------------------')
console.log('|   WELCOME TO THIS README GENERATOR!    |')
console.log(' ----------------------------------------')

inquirer

  .prompt([
      {
    type:'input',
    name: 'title',
    message: 'Write the title for your project',
      },
      {
    type: 'input',
    name: 'introduction',
    message: 'Write a short introduction of your project',
     },
     {
    type: 'input',
    name: 'about',
    message: 'Tell us about your project, does it solve some any problem?',
    },
    {
    type: 'checkbox',
    name: 'technologies',
    message: 'Add some badges! Choose any badge you would like to add. Press space to select one single badge or press A to select or deselect all badges.',
    choices: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'SASS', 'NodeJS', 'VueJS', 'React', 'Angular', 'Java', 'TypeScript', 'PHP', 'Phyton', 'Github', 'Git', 'MongoDB', 'MySQL'],
    },
     {
    type: 'input',
    name: 'technologiesDescription',
    message: 'Why did you choose to use those technologies?'
     },
     {
    type: 'input',
    name: 'challenges',
    message: 'What challenges did you go through? ',
     },
])
  .then((response) => {

   //Destructuring my responses
    const {title, introduction, about, technologies, technologiesDescription, challenges} = response;

    //Loop to pass the badge from the badges module when user choose any badge
   for(let i in technologies){

      if(technologies[i] === 'HTML'){

         technologies[i] = HTML;
      }

      if(technologies[i] === 'CSS'){

         technologies[i] = CSS;
      }

      if(technologies[i] === 'JavaScript'){

         technologies[i] = JavaScript;
      }

      if(technologies[i] === 'Bootstrap'){ 

         technologies[i] = Bootstrap;
      }

      if(technologies[i] === 'Tailwind'){

         technologies[i] = Tailwind;
      }

      if(technologies[i] === 'SASS'){

         technologies[i] = SASS;
      }

      if(technologies[i] === 'NodeJS'){

         technologies[i] = NodeJS;
      }

      if(technologies[i] === 'VueJS'){

         technologies[i] = VueJS;
      }

      if(technologies[i] === 'React'){

         technologies[i] = React;
      }

      if(technologies[i] === 'Angular'){

         technologies[i] = Angular;
      }

      if(technologies[i] === 'Java'){

         technologies[i] = Java;
      }

      if(technologies[i] === 'TypeScript'){

         technologies[i] = TypeScript;
      }

      if(technologies[i] === 'PHP'){

         technologies[i] = PHP;
      }

      if(technologies[i] === 'Phyton'){

         technologies[i] = Phyton;
      }

      if(technologies[i] === 'Github'){

         technologies[i] = Github;
      }

      if(technologies[i] === 'Git'){

         technologies[i] = Git;
      }

      if(technologies[i] === 'MongoDB'){

         technologies[i] = MongoDB;
      }

      if(technologies[i] === 'MySQL'){

         technologies[i] = MySQL;
      }

   }

//Here we are writing the README file
const writeReadme = `# ${title} 

# Introduction to the project
* ${introduction}.

# About this project 
* ${about}.

# Technologies used
<div style="display=flex flex-row flex-wrap">
${technologies}
</div>

# Why I used this technologies?
* ${technologiesDescription}.

# Challenges
* ${challenges}.
      
`
//Cleaning commas between the badges
const cleanREADME = writeReadme.replace(/[,]/g, ' ');

   //Creating README file with the fs library
   fs.writeFile('README.md', cleanREADME, (err)=> err ? console.error(err) : console.log('Readme successfully created!') )
    
  })
  .catch((error) => {
    console.log(error)
  });

}

readmeGenerator();