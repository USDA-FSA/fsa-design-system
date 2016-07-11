module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Copies templates and assets from dependencies and/or src
    copy: {

      fsaStyleSass: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/stylesheets',
        dest: '_sass'
      },

      fsaStyleImg: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/img',
        dest: 'img'
      },

      fsaStyleFonts: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/fonts',
        dest: 'fonts'
      },

      fsaStyleJavascriptComponents: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/js/components',
        dest: 'js/components'
      },

      fsaStyleJavascriptVendor: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/js/vendor',
        dest: 'js/vendor'
      },

    },

    // Browserify them JSs
    browserify: {
      main: {
        files: {
          'js/<%= pkg.name %>.js': [
            'js/start.js'
          ],
        }
      }
    },

  });

  // Register Tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [
    'copy',
    'browserify',
  ]);
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
