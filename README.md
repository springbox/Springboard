# Springboard

Springboard is a front-end framework to give you a giant leap forward when you begin any web project.

## Dependencies
[Grunt](http://gruntjs.com/) is the preferred method to utilize Springboard's awesome features. Grunt requires you to have Node.js and Grunt's command line interface installed globally. Our particular setup requires Ruby, Sass, and Compass >=0.12.2 installed. 

### Node.JS
Navigate to the [Node.js download page](http://nodejs.org/download/) and install Node. It's straight forward if you use the installers provided for OS X and Windows. If you're on Linux, see [Node's wiki on Github](https://github.com/joyent/node/wiki/Installation) for more detailed instructions.

### Grunt-cli
If you haven't used Grunt before, you'll need to install the command line interface for it. Open your terminal and run `npm install -g grunt-cli`. You may need to use sudo or run your command shell as an Administrator.

### Ruby, SASS & Compass
If you're on OS X or Linux you probably already have Ruby installed; test with ruby -v in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass.

If you're on Windows, you can download and install via [RubyInstaller](http://rubyinstaller.org/downloads/). During installation be sure to ensure the "Add Ruby executables to your PATH" checkbox is checked. Once the installer is finished, open your command shell and run `gem install compass`.

## Getting started

### Grunt
Since we don't store our dependencies in git, you'll need to download them to get started with Springboard. Just open your terminal, navigate to Springboard's root directory and run `npm install`. This tells Node's package manager to fetch our dependencies (located in `package.json`).

#### Available tasks

	compass — Compile Sass to CSS using Compass *                            
	watch — Run predefined tasks whenever watched files change.            
	default — Alias for "compass" task.    

### Javascript

### SASS + Compass
