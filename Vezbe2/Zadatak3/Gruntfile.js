module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);



  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      development: {
        options: {
          paths: ['style']
        },
        files: {
          'style/style.css': 'style/style.less'
        }
      }
    },
    watch: {
      css: {
        files: 'style/*.less',
        tasks: ['less'],
        options: {},
      },
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['less','watch']);

};