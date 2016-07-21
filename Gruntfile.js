module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Listing Tasks
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: "bundle exec jekyll build"
      },
      jekyllServe: {
        command: "bundle exec jekyll serve"
      }
    },

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

    // Watches files for changes and run relevant tasks
    watch: {
      css: {
        files: [
          '_site/css/*.css',
          '_site/css/**/*scss'
        ],
        tasks: ['postcss'],
        options: { nospawn: true }
      },
      js: {
        files: [
          'js/*.js',
          'js/**/*.js',
        ],
        tasks: ['browserify']
      },
    },

    // PostCSS, primarily to autoprefix
    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: '_site/css' // ...to the specified directory
        },
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('postcss-quantity-queries')(), // do things like .asdf:at-least(4) {} ; https://github.com/pascalduez/postcss-quantity-queries
          require('autoprefixer')({ browsers: 'last 3 versions' }), // add vendor prefixes
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: '_site/css/*.css'
      }
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

    // run tasks in parallel
    concurrent: {
      serve: [
        'build',
        'watch'
      ],
      options: {
        logConcurrentOutput: true
      }
    }

  });

  // Register Tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [
    'copy',
    'postcss',
    'browserify',
    'shell:jekyllServe',
  ]);
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
