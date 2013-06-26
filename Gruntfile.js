module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dev: {
				options: {
					sassDir: 'library/scss',
					cssDir: 'library/css'
				}
			}
		},
		watch: {
			files: '**/*.scss',
			tasks: ['compass'],
			options: {
				interrupt: true,
				livereload: true
			}
		}
	});

	// Default task(s).
	grunt.registerTask('default', ['compass']);

};