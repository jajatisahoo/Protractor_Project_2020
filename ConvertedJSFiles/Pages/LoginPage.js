"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Login = /** @class */ (function () {
    function Login() {
    }
    // using method
    Login.prototype.GetUrl = function (url) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get(url);
    };
    Login.prototype.EnterEmail = function (emailid) {
        Login.Email.sendKeys(emailid);
    };
    Login.prototype.EnterPassword = function (PasswordField) {
        Login.Password.sendKeys(PasswordField);
    };
    Login.prototype.ClickLogin = function () {
        protractor_1.element(protractor_1.by.id('btnLogin')).click();
    };
    // using variables
    Login.Email = protractor_1.element(protractor_1.by.id('txtUsername'));
    Login.Password = protractor_1.element(protractor_1.by.id('txtPassword'));
    return Login;
}());
exports.Login = Login;
//let login=new Login();
