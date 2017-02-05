module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'css/style.css': 'css/style.less'
        }
      }
    },
    watch: {
      css: {
        files: 'css/*.less',
        tasks: ['less'],
        options: {}
        }
    }
  });


  grunt.registerTask('default', ['less','watch']);

};