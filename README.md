# Getting started

This framework utilizes SASS + Compass + Compass Extensions. To compile these there are a number of GUI apps that can take care of this for you. [Fire.app](http://fireapp.handlino.com/) and [CodeKit](http://incident57.com/codekit/) are two choices. If you prefer to create your own set up, you can refer to this document on [installing SASS and Compass across platforms](http://snugug.com/musings/installing-sass-and-compass-across-all-platform).

## SASS + Compass + Extensions

Compass has many built in @mixins that are useful for SASS projects, but it also has many extensions for enhanced functionality. We make use of some of them and they can be found in the /extensions directory. However, rather than using them as Compass extensions, they are imported directly to /library/core/styles.scss to avoid SASS config problems. Documention for each extension can be found at the links below.

1. [Breakpoint](http://breakpoint-sass.com/#get_started)
	Easily set breakpoints.
2. [Respond To](https://github.com/Snugug/respond-to)
	Predefine breakpoints for convenience on larger projects.
3. [Singularity.gs](https://github.com/Team-Sass/Singularity)
	Quickly build out responsive grids.