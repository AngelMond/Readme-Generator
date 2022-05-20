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
   message: 'Add some badges! Choose any badge you would like to add.',
   choices: [HTML, CSS, JavaScript, Bootstrap, Tailwind, SASS, NodeJS, VueJS, React, Angular, Java, TypeScript, PHP, Phyton, Github, Git, MongoDB, MySQL],
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

    const writeReadme = ` # ${title} 
       
# Introduction to the project
* ${introduction}.

# About this project 
* ${about}.

# Technologies used
<div style="display=flex flex-row flex-wrap ">
${technologies}
</div>

* ${technologiesDescription}.

# Challenges
* ${challenges}.
    
    `
    
    fs.writeFile('README.md', writeReadme, (err)=> err ? console.error(err) : console.log('Readme successfully created!') )

  })
  .catch((error) => {
    console.log(error)
  });