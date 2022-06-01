
# Readme-Generator

# Introduction to the project
* This program allows any developer create almost automatically a readme file, algo the user can add badges to the readme in order to have a polish and very nice readme file.

# About this project 

* This program will save a precious time for developers, so they can focus more on their code.The process to generate a readme file have the following structure.
* First: The user will be asked to write a title for the readme.
* Second: The user will be asked to write a short introduction for the project.
* Third: The user will be asked to tell us about the project and if the project solve any kind of problem.
* Fourth: The user will be able to choose any badge that will be showed in the checkbox.
* Fifth: The user will be able to explain about the technologies that was used to developed the project.
* And last but not least, the user will be asked to share what were some of the challenges in the development of the project.
* This program runs thanks to the inquirer library and the fs library that comes by default with nodejs.
# Technologies used
<div style="display=flex flex-row flex-wrap">
<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=fff">
<img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=fff">
<img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=fff">
<img src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=fff">
</div>

# Why I used this technologies?
* Because I wanted to create an interface in the command line, so developers can generate a readme file in a very easy way.

# Challenges
* Well, actually I can say that the tough part was creating the code so the user can choose the badges that might like, I used a for in loop to have a friendly user interface when the user is about to choose the badges, that was the most difficult part and the rest actually was pretty simple.

# Issues
* There's just one issue and that when the user add a badge, the program will add a comma between the badges, so the commas will be showed in the readme if the user dont delete them and I still didn't figure out how to prevent that, think maybe it's something about the inquirer package.

# Issues solved
* Already solve the problem using .replace() method before generating the README and cleaning the commas from the README.
      
# Link to the video
* In the video I can show you the functionality of the program through the user interaction from the command line and the generating the README.
<div><a href="https://drive.google.com/file/d/13rTC_SZNWjC1gxLvjIfu8fSHI34oxx2g/view" target="_blank">Video Here!</a></div>