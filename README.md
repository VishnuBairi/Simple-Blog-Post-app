This is a simple blog-post application developed using 
Back-end =>Node.js, Express.js
Database=> MongoDB
Front-End - EJS



**NPM**

The NPM – Node Package Manager is the default package manager for NodeJs. Basically, NodeJs is a JavaScript runtime environment, allowing developers to develop the scalable application in a given time. It is used to install, manage, and share reusable code packages or modules written in JavaScript.

NPM allows open-source web developers to share and borrow packages for app development. Also, it works as a command-line utility for the application for installing packages in the project, dependency management, and even version management.

Components of NPM
1) Website: You can find packages from the official NPM website for your project. Also, you can create and set up profiles to manage and access all types of packages.

2) Command Line Interface (CLI): To interface with NPM packages and repositories, the CLI runs from your computer's terminal.

3) Registry: It has a huge database of JavaScript projects and meta-data. Thus, it allows you to use any supported NPM registry. Also, you can utilize someone else’s registry as per their terms of use.

**What’s NodeJS?**

NodeJS is an open-source, cross-platform JavaScript library and runtime environment. You can use it to run web apps outside the client's browser. Ryan Dahl developed Node.js in 2009, and the latest version, v18, was released in October 2022. This IDE is used to develop server-side web apps, and since it uses an asynchronous, event-driven model, it is the best option for creating data-intensive apps.

Node.js 19 allows you to keep yourself updated with the latest changes and features. Since Node.js 19 is an odd-numbered release line, it won't be upgraded to LTS.You can read more about guidelines and release policies on the Node.js GitHub account.

Moreover, with the prior success of Node.js 20, Node.js released its latest version – Node.js 21. We can say that the release line is odd-numbered, which means NodeJS 20 is promoted to long-term support (LTS) and will receive support until April 2026. And Node.js 21 will be ‘Current' release for the next 6 months, until April 2024.

According to the Stack Overflow Developer Survey 2022. NodeJS is the most popular web development technology. Moreover, Node.js has become the most widely used tool for web development in the US with more than 6.3 million websites.

Since Node.js architecture supports "Single Threaded Event Loop", NodeJS manages multiple concurrent clients at the same time. The Node.js processing model is built on the JavaScript event-based model, as well as the JavaScript callback mechanism.

**Prerequisites**
Here’s what you need to go ahead with NodeJs and NPM.

**Hardware Requirements**

RAM 4GB
CPU Intel Core i3TM i3 HQ CPU @2.50 GHz
ROM 256 GB
Software Requirement

Chocolatey
How to maximize your web app's potential with NodeJs 01

**How to Install Node.js and NPM on Windows?**

Since we have decided to create an application using Node.Js, first of all, you have to install Node.Js on your Windows system.

Here, we are going to explain the installation process step-by-step. So, let’s start with the first step now.

Step 1: Download the Installer
Download the Windows Installer from NodeJs official website. Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.

Here, we are choosing the 64-bit version of the Node.js installer.

Install Node.js 64-bit version

The LTS (Long-term Support) version is highly recommended for you. After the download of the installer package, install it with a double-click on it.

Now .msi file will be downloaded to your browser. Choose the desired location for that.

Step 2: **Install Node.js and NPM**
Install NPM and Node.js

After choosing the path, double-click to install .msi binary files to initiate the installation process. Then give access to run the application.

You will get a welcome message on your screen and click the “Next” button. The installation process will start.

Choose the desired path where you want to install Node.js.
Choose Path to Install Node.js

By clicking on the Next button, you will get a custom page setup on the screen. Make sure you choose npm package manager , not the default of Node.js runtime . This way, we can install Node and NPM simultaneously.
You should have 143MB of space to install Node.js and npm features.

The following features will be installed by default:

Node.js runtime
Npm package manager
Online documentation shortcuts
Add to Path
select node js features to install

Bang! The setup is ready to install Node and NPM. Let’s click on the Install button so hard!
Final Step of Node.js Installation

Step 3: Check Node.js and NPM Version
If you have a doubt whether you have installed everything correctly or not, let’s verify it with “Command Prompt”.
Check Node.js and NPM Version

Command Prompt window will appear on the screen.

To confirm Node installation, type node -v command.

To confirm NPM installation, type npm -v command.

And you don’t need to worry if you see different numbers than mine as Node and NPM are updated frequently.

Frequent Update of Node and NPM

**EJS(Embedded Javascript Template)**

Get Started
Install
It's easy to install EJS with NPM.

$ npm install ejs
Use
Pass EJS a template string and some data. BOOM, you've got some HTML.

let ejs = require('ejs');
let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
CLI
Feed it a template file and a data file, and specify an output file.

ejs ./template_file.ejs -f data_file.json -o ./output.html
Browser support
Download a browser build from the latest release, and use it in a script tag.

<script src="ejs.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render('<%= people.join(", "); %>', {people: people});
</script>
Docs
Example
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
Usage
let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});
Options
cache Compiled functions are cached, requires filename
filename Used by cache to key caches, and for includes
root Set project root for includes with an absolute path (e.g, /file.ejs). Can be array to try to resolve include from multiple directories.
views An array of paths to use when resolving includes with relative paths.
context Function execution context
compileDebug When false no debug instrumentation is compiled
client Returns standalone compiled function
delimiter Character to use for inner delimiter, by default '%'
openDelimiter Character to use for opening delimiter, by default '<'
closeDelimiter Character to use for closing delimiter, by default '>'
debug Outputs generated function body
strict When set to `true`, generated function is in strict mode
_with Whether or not to use with() {} constructs. If false then the locals will be stored in the locals object. (Implies `--strict`)
localsName Name to use for the object storing local variables when not using with Defaults to locals
rmWhitespace Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of -%> line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).
escape The escaping function used with <%= construct. It is used in rendering and is .toString()ed in the generation of client functions. (By default escapes XML).
outputFunctionName Set to a string (e.g., 'echo' or 'print') for a function to print output inside scriptlet tags.
async When true, EJS will use an async function for rendering. (Depends on async/await support in the JS runtime.
Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
Includes
Includes are relative to the template with the include call. (This requires the 'filename' option.) For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use <%- include('user/show'); %>.

You'll likely want to use the raw output tag (<%-) with your include to avoid double-escaping the HTML output.

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
