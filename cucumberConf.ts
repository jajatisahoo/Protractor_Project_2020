/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
import { Config, browser } from 'protractor';
exports.config = {

    directConnect: true,


    baseUrl: 'https://angularjs.org/',

    capabilities: {
        browserName:'chrome'
    },

    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

    specs: [
      'C:\\End-to-end-Project\\Protractor_Project_2020\\cucumber\\feature\\cucumber1.feature'     // Specs here are the cucumber feature files
    ],


    // cucumber command line options
    cucumberOpts: {
     // require: ['./cucumber/*.js'],  // require step definition files before executing features
     require: 'C:\\End-to-end-Project\\Protractor_Project_2020\\ConvertedJSFiles\\cucumber\\stepDefinitions\\stepDefinitions.js',


      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
     // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },

   onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };
