# Table of Content
- [Installation](#installation)
    * [Windows Installation](#windows-installation)
    * [macOS Installation](#macos-installation)
    * [Linux Installation](#linux-installation)
- [Hello World](#hello-world)
- [REPL Terminal](#repl-terminal)
- [Basics](#basics)
    * [Primitive Types](#primitive-types)
    * [Loose Typing](#loose-typing)
    * [Object Literal](#object-literal)
    * [Functions](#functions)
    * [Buffer](#buffer)
    * [process object](#process-object)
- [Modules](#modules)
- [Package Manager(NPM)](#package-manager-npm)
- [Brief Intro to Modern Javascript](#brief-intro-to-modern-javascript)
- [Callbacks and Events](#callbacks-and-events)
- [Express Framework](#express-framework)
- [Restful API](#restful-api)
- [Packaging](#packaging)
- [Database Access](#database-access)

# Installation
## Windows Installation
Visit https://nodejs.org/ and download the latest LTS version of node for windows current version while writing is **12.18.4** which includes npm **6.14.6**

Once downloaded install the node js follow
### Step 1
![Step 1](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_1.png)
### Step 2
![Step 2](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_2.png)
### Step 3
![Step 3](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_3.png)
### Step 4
![Step 4](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_4.png)
### Step 5
![Step 5](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_5.png)
### Step 6
![Step 6](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_6.png)
### Step 7
![Step 7](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_7.png)
### Step 8
![Step 8](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/node_install_8.png)
### Verify installation
Verify nodejs and npm installation by using following command
**node -v**
**npm -v**
![Verify nodejs and npm](https://github.com/classroomnode/nodejs-firststep/blob/master/screenshots/verify_installation.png)


## macOS Installation
> TODO: to be updated

## Linux Installation
> TODO: to be udpated

# Hello World
Create a file with any name for e.g. node-hello-world.js in your working directory, node executable files are saved with .js extension. In file add following line

> console.log

save file and execute the following command via command prompt or terminal

> node node-hello-world.js

# REPL Terminal
Node.js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. It is a quick and easy way to test simple Node.js/JavaScript code.

To launch the REPL (Node shell), open command prompt (in Windows) or terminal (in Mac or UNIX/Linux) and type `node` without any arguments. It will change the prompt to > in Windows and MAC.

REPL Command | Description
-------------|-------------
.help | Display all help commands
.break | Sometimes you get stuck, this gets you out
.clear | Alias for .break
.editor | Enter editor mode
.exit | Exit the REPL
.load | Load JS from a file into the REPL session
.save | Save all evaluated commands in this REPL session to a file
Ctrl + c | Terminate the current command.
Ctrl + c(twice) | Exit from REPL
Ctrl + d | Exit from REPL

# Basics
Node.js supports JavaScript. So, JavaScript syntax on Node.js is similar to the browser's JavaScript syntax

## Primitive Types
Node.js includes following primitive types:
* String
* Number
* Boolean
* Undefined
* Null
* RegExp

Everything else is an object in Node.js

## Loose Typing
JavaScript in Node.js supports loose typing like the browser's JavaScript. Use var keyword to declare a variable of any type.

## Object Literal
> var obj = {
    authorName: 'Ryan Dahl',
    language: 'Node.js'
}

## Functions
Functions are first class citizens in Node's JavaScript, similar to the browser's JavaScript. A function can have attributes and properties also. It can be treated like a class in JavaScript.
> function Display(x) { 
    console.log(x);
}
Display(100);

## Buffer
Node.js includes an additional data type called Buffer (not available in browser's JavaScript). Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network.

## process object
Each Node.js script runs in a process. It includes process object to get all the information about the current process of Node.js application.

# Modules
Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.

Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder.

## Module Types
* Core Modules
* Local Modules
* Third Party Modules

### Core Modules
Core Module | Description
------------|-------------
http        | http module includes classes, methods and events to create Node.js http server.
url         | url module includes methods for URL resolution and parsing.
querystring | querystring module includes methods to deal with query string.
path        | path module includes methods to deal with file paths.
fs          | fs module includes classes, methods, and events to work with file I/O.
util        | util module includes utility functions useful for programmers.

### Local Modules
Local modules are modules created locally in your Node.js application. These modules include different functionalities of your application in separate files and folders.

## Export Modules
The `module.exports` is a special object which is included in every JavaScript file in the Node.js application by default. The `module` is a variable that represents the current module, and `exports` is an object that will be exposed as a module. So, whatever you assign to `module.exports` will be exposed as a module.

### Export Literal
> module.exports = 'Hello world';
### Export Object
> exports.SimpleMessage = 'Hello world';
//or
module.exports.SimpleMessage = 'Hello world';

> module.exports.log = function (msg) { 
    console.log(msg);
};
### Export Function
> module.exports = function (msg) { 
    console.log(msg);
};
> 
### Export Function as Class
> module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    }
}

# Package Manager (NPM)
Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages

## Check Version
> npm -v

## For NPM Help
> npm help

## Install Package Locally
> npm install [package name]

## Add dependency into package.json
> npm install [package name] --save

## Install Package Globally
> npm install -g [package name]

## Update Package
> npm update [package name]

## Uninstall Package
> npm uninstall [package name]