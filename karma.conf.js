// Karma configuration
// Generated on Sun Oct 01 2017 20:22:35 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher')
     // require('karma-remap-istanbul')
     // require('karma-babel-preprocessor')
    ],
    // list of files / patterns to load in the browser
    files: [
      '**/*.spec.js'
    ],
    preprocessors: {
     // 'client/imports/**/*.js': ['babel']
    },    
    // Babel preprocessor specific configuration
    /*babelPreprocessor: {
      options: {
        presets: ['es2015'], // use the es2015 preset
        sourceMap: 'inline' // inline source maps inside compiled files
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    */
   /* mime: {
      'text/x-typescript': ['ts','tsx']
    },
    */
    mime: { 'text/x-typescript': ['ts','tsx'] },
/*
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'karma-remap-istanbul']
              : ['progress'],

*/
    
    // list of files to exclude
    exclude: [ 
      "node_modules",
      ".meteor",
      "node_modules/**/*.spec.js"
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
