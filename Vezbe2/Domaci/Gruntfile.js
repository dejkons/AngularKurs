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
        options: {}
      },
      js: {
        files: 'script.js',
        tasks: ['uglify'],
        options: {}
      }
    },
    uglify: {
      my_target: {
        files: {
          'script.min.js': ['script.js']
        }
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['less','uglify','watch']);

};