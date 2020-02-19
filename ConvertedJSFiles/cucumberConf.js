"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
var protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    baseUrl: 'https://angularjs.org/',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'C:\\End-to-end-Project\\Protractor_Project_2020\\cucumber\\feature\\cucumber1.feature' // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        // require: ['./cucumber/*.js'],  // require step definition files before executing features
        require: 'C:\\End-to-end-Project\\Protractor_Project_2020\\ConvertedJSFiles\\cucumber\\stepDefinitions\\stepDefinitions.js',
        tags: [],
        strict: true,
        // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        'dry-run': false,
        compiler: [] // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
};
