# Springboard

Springboard is a front-end framework to give you a giant leap forward when you begin any web project. It's currently a work in progress, but the base of any CSS framework is finished: responsive grids, paragraphs, headings, forms, quotes, lists, etc. If you want to see a particular module included, let us know! We'd be happy to accept your [pull request](https://github.com/springbox/Springboard/pulls) or discuss it in an [issue](https://github.com/springbox/Springboard/issues).

## Dependencies
[Grunt](http://gruntjs.com/) is the preferred method to utilize Springboard's awesome features. Grunt requires you to have Node.js and Grunt's command line interface installed globally. Our particular setup requires Ruby, Sass, and Compass >=0.12.2 installed. 

If you prefer Codekit or another option for compiling SCSS, you can certainly use it for most of Springboard's features! Grunt, however, is the best option we've been able to find for cross-platform teams.

### Node.JS
Navigate to the [Node.js download page](http://nodejs.org/download/) and install Node. It's straight forward if you use the installers provided for OS X and Windows. If you're on Linux, see [Node's wiki on Github](https://github.com/joyent/node/wiki/Installation) for more detailed instructions.

### Grunt-cli
If you haven't used Grunt before, you'll need to install the command line interface for it. Open your terminal and run `npm install -g grunt-cli`. You may need to use sudo or run your command shell as an Administrator.

### Ruby, SASS & Compass
If you're on OS X or Linux you probably already have Ruby installed; test with ruby -v in your terminal. When you've confirmed you have Ruby installed, run `gem update --system && gem install compass` to install Compass and Sass.

If you're on Windows, you can download and install via [RubyInstaller](http://rubyinstaller.org/downloads/). During installation be sure to ensure the "Add Ruby executables to your PATH" checkbox is checked. Once the installer is finished, open your command shell and run `gem install compass`.

## Getting started

### Grunt
Since we don't store our grunt-specific dependencies in git, you'll need to download them to get started with Springboard. Just open your terminal, navigate to Springboard's root directory and run `npm install`. This tells Node's package manager to fetch our dependencies (located in `package.json`).

#### Available tasks

- *compass* — Compile Sass to CSS using Compass *                            
- *watch* — Run predefined tasks whenever watched files change.            
- *default* — Alias for "compass" task.    

### SASS + Compass
Springboard's SASS structure is designed to help mitigate large problems with existing front-end frameworks. Visual styles being too opinionated, non-semantic classes encouraged, or mixins easily producing too much code.

So how do we do tackle those problems? Springboard provides options! 

- If you prefer your non-semantic classes, that's ok! They're included. But if you don't, just write one line to turn them off. 
- If you like your mixins, they're there! But we include [placeholder selectors](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#placeholder_selectors_) and encourage you to use those in your SCSS. 
- If you don't want all the visual styling, too bad! We're not there yet, but we've kept the styles as minimal as possible for the time being.

#### Settings
With Springboard, we want you to only use the classes that are relevant to your project. You'll notice in the `library/scss` directory there are two folders: *app* and *core*. You shouldn't _ever_ have to touch the `core` folder. Within the `app` folder, you'll notice two default files: *_main.scss* and *_override.scss*. Both are called by our `library/scss/styles.scss` (the muscle of our SCSS), but there's a difference between the two. The *_override.scss* file is imported before anything else, and the main file is imported at the end. Doing it this way gives us options. We can use *_override.scss* to do what its name suggests and we can use *_main.scss* to override Springboard's styles via the natural cascade as well as add our own. 

##### Overrides 
If you do some digging into the core directory, you'll notice quite a few variables with `!default` at the top of all the files. This default setting allows us to _override_ the variable at any point above that particular declaration. Doing so let's us do some cool things, such as turning off all our classes but keeping the grid or keeping all our classes on except button classes. 

For example, if you don't have forms or tables on your pages there's obviously no reason to include the form or table styles! You'd set this in your `_override.scss` to keep any form styles from being printed to your compiled CSS file:

	$print-base-form-classes:	false;
	$print-base-form-elements:	false;
	$print-base-table-classes:	false;
	$print-base-table-elements:	false;

And now there's no trace of tables or forms in your CSS.

