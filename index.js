const inquirer = require('inquirer');
const fs = require('fs');
const badge = require('./badges.js');

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
    message: 'What challenges do you go through? ',
     },
])
  .then((response) => {

   
    const {title, introduction, about, technologies, technologiesDescription, challenges} = response;
    
    if(technologies[0]){
         technologies[0] = HTML;
    }

    if(technologies[1]){
        technologies[1] = CSS;
    }

    if(technologies[2]){
        technologies[2] = JavaScript;
    }

    if(technologies[3]){
        technologies[3] = Bootstrap;
    }

    if(technologies[4]){
        technologies[4] = Tailwind;
    }

    if(technologies[5]){
        technologies[5] = SASS;
    }

    if(technologies[6]){
        technologies[6] = NodeJS;
    }

    if(technologies[7]){
        technologies[7] = VueJS;
    }

    if(technologies[8]){
        technologies[8] = React;
    }

    if(technologies[9]){
        technologies[9] = Angular;
    }

    if(technologies[10]){
        technologies[10] = Java;
    }

    if(technologies[11]){
        technologies[11] = TypeScript;
    }

    if(technologies[12]){
        technologies[12] = PHP;
    }

    if(technologies[13]){
        technologies[13] = Phyton;
    }

    if(technologies[14]){
        technologies[14] = Github;
    }

    if(technologies[15] ){
        technologies[15] = Git;
    }

    if(technologies[16]){
        technologies[16] = MongoDB;
    }

    if(technologies[17]){
        technologies[17] = MySQL;
    }


    const writeReadme = ` # ${title} 

# Introduction to the project
* ${introduction}.

# About this project 
* ${about}.

# Technologies used
<div style="display=flex flex-row flex-wrap ">
${technologies}
</div>

# Why I used this technologies?
* ${technologiesDescription}.

# Challenges
* ${challenges}.
    
`
    
    fs.writeFile('README.md', writeReadme, (err)=> err ? console.error(err) : console.log('Readme successfully created!') )

  })
  .catch((error) => {
    console.log(error)
  });