"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        protractor_1.browser.get('https://angularjs.org'); // Entering application url in browser
        // Enter text under TODO
        protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test');
        protractor_1.element(protractor_1.by.css('[value="add"]')).click(); // Clicks on 'Add' button
        // Getting all Todo lists displayed
        protractor_1.element.all(protractor_1.by.repeater('todo in')).then(function (todoList) {
            // Asserting the TODO's count as 3
            expect(todoList.length.toString()).toEqual('3');
            todoList[2].getText().then(function (text) {
                //Verifying newly entered TODO is added
                expect(text).toEqual('write first protractor test');
            });
        });
    });
});
