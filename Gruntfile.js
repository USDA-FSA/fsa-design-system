module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // URL to JSON is located here "https://fonts.google.com/metadata/icons"
  var MDOfficial = grunt.file.readJSON("_data/MDOfficial.json");
  var FPACIconsList = grunt.file.readJSON("_data/fpac-material-icons-list.json");
  var MDIcons = MDOfficial.icons;
  
  // start building icons JSON string
  var iconsList = '{"icons":[';
  var iconsStr = "";
  var hasRun = false;
  var cats = [];
  var count = 0;

  grunt.file.recurse('img/material-design-icons', createFileList);

  function createFileList(abspath, rootdir, subdir, fileName){
    var cat = '';
    var pop = '1';
    // strip fileName of extra details
    var fn = fileName.split("_24px")[0].split("ic_")[1];
    // search thru official Material Design Icons data for object
    var newObj = MDIcons.find(obj => obj.name == fn);
    var iconName, iconTags;
    var svg = grunt.file.read(String( abspath ));
    // Clearn svg string of characters that cause JSON parsing errors
    svg = svg.replace(/[\n\r]+/g,'');
    svg = svg.replace(/\s\s+/g, ' ');
    svg = svg.replace(/"/g, "'");

    // Assign truthy value if icon is FPAC Design System default
    var showDS = FPACIconsList.icons.some( item => item.fileName === fileName );

    if(newObj != undefined){
      // create the display name for the icon
      iconName = newObj.name.split("_").join(" ");
      // ensure the keywords list is populated
      iconTags = String(newObj.tags) == "" ? iconName.split("_").join(",") : newObj.tags;
      cat = newObj.categories.toString();
      cats.push( cat );
      pop = parseInt( newObj.popularity ) > 0 ? newObj.popularity : '1';
    } else {
      // create the display name for the icon
      iconName = fn.split("_").join(" ");
      // ensure the keywords list is populated
      iconTags = iconName.split("_").join(",");
    };
    // Used only for Development/Testing
    count++;
    //continue building icons JSON string
    iconsStr += '{"name":"'+String(iconName)+'",';
    iconsStr += '"fileName":"'+String(fileName)+'",';
    iconsStr += '"category":"'+String(cat)+'",';
    iconsStr += '"popularity":"'+String(pop)+'",';
    iconsStr += '"keywords":"'+String(iconTags)+'",'
    iconsStr += '"svg":"'+String(svg)+'",';
    iconsStr += '"showDS":"'+showDS+'"},';
    
  };
  if(!hasRun) {
    hasRun = true;
    // Used only for Development/Testing
    console.log("ICON COUNT", count);
    // finalize building icons JSON string
    iconsList += iconsStr.slice(0,-1) +'],';
    // Add Categories List to JSON file and finalize string
    var catsArray = [...new Set(cats)];
    var catsString = '"';
    catsArray.forEach(item => { catsString += String(item + '","') });
    catsString = catsString.slice(0,-2);
    iconsList += '"categories":['+ catsString +']}';
    // ensure string is in JSON format
    iconsJson = JSON.parse(JSON.stringify(iconsList));
  }
  
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

    'string-replace': {
      dist: {
        files: { 'data/icons.json': '_data/icons-blank.json'},
        options: {
          replacements: [{
            pattern: '{}',
            replacement: iconsJson
          }]
        }
      }
    },

    // Copies templates and assets from dependencies and/or src
    copy: {

      fsaStyleSass: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/stylesheets',
        dest: '_sass/lib/fsa-style'
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

      fsaStyleJavascriptUtilities: {
         expand: true,
         src: '**',
         cwd: 'node_modules/fsa-style/src/js/utilities',
         dest: 'js/utilities'
       },

      fsaStyleJavascriptVendor: {
        expand: true,
        src: '**',
        cwd: 'node_modules/fsa-style/src/js/vendor',
        dest: 'js/vendor'
      }
    },

    // Lint scss files
    scsslint: {
      allFiles: [
        '_sass/*.scss',
        '_sass/*/*.scss',
      ],
      options: {
        bundleExec: false,
        colorizeOutput: true,
        config: '.scss-lint.yml',
        force: true,
        reporterOutput: null
      },
    },

    // Sass all the style things
    sass: {
      default: {
        files: {
          'css/<%= pkg.name %>.css': '_sass/<%= pkg.name %>.scss',
          //'css/file.css': '_sass/file.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        },
      },
      minify: {
        files: {
          'css/<%= pkg.name %>.min.css': '_sass/<%= pkg.name %>.scss',
          //'css/file.min.css': '_sass/file.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
      },
    },

    // Watches files for changes and run relevant tasks
    watch: {
      sass: {
        files: [
          '_sass/*.scss',
          '_sass/**/*.scss'
        ],
        tasks: ['sass', 'scsslint', 'postcss'],
        options: { nospawn: true }
      },
      // css: {
      //   files: [
      //     'css/*.css'
      //   ],
      //   tasks: ['postcss'],
      //   options: { nospawn: true }
      // },
      js: {
        files: [
          'js/*.js',
          'js/**/*.js',
        ],
        tasks: ['browserify', 'uglify']
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
          require('autoprefixer')({ browsers: 'last 3 versions' }), // add vendor prefixes
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    // Uglify (minimize) JS
    uglify: {
      options: {
        banner: '/*! FPAC Design System - Docs | http://usda-fsa.github.io/fsa-design-system/ */\n\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/<%= pkg.name %>.min.js'
      }
    },

    // Browserify them JSs
    browserify: {
      main: {
        files: {
          'js/<%= pkg.name %>.js': [
            'js/main.js'
          ],
        }
      }
    },

    // run tasks in parallel --- "start": "grunt concurrent:serve"
    concurrent: {
      serve: [
        'shell:jekyllServe',
        'watch'
      ],
      options: {
        logConcurrentOutput: true
      }
    }

  });


  grunt.loadNpmTasks('grunt-string-replace');

  // Register Tasks
  grunt.registerTask('default', ['build', 'string-replace']);
  grunt.registerTask('build', [
    'copy',
    'sass',
    'postcss',
    'browserify',
    'uglify',
    'string-replace',
    'shell:jekyllServe',
    'watch'
  ]);
  grunt.registerTask('server', ['shell:jekyllServe']);
  grunt.registerTask('lint', 'scsslint');
  grunt.registerTask('test', 'default', function () { grunt.log.writeln('Test that the app runs');});

};
