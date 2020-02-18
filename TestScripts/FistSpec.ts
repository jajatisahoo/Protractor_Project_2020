import { ElementFinder, browser, by, element } from 'protractor';
describe('angularjs homepage todo list', function () { //Suite in Jasmine
  it('should add a todo', function () { // Test in Jasmine
    browser.get('https://angularjs.org'); // Entering application url in browser
    // Enter text under TODO
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click(); // Clicks on 'Add' button
    // Getting all Todo lists displayed
    element.all(by.repeater('todo in')).then(function (todoList) {
      // Asserting the TODO's count as 3
      expect(todoList.length.toString()).toEqual('3');
      todoList[2].getText().then(function (text) {
        //Verifying newly entered TODO is added
        expect(text).toEqual('write first protractor test');
      });
    });
  });
});