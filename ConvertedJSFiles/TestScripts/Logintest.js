"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("../Pages/LoginPage");
var ReadPropertiesFile_1 = require("../Util/ReadPropertiesFile");
var login = new LoginPage_1.Login();
var readFile = new ReadPropertiesFile_1.ReadExcel();
describe('Login functionality', function () {
    it('login to orange CRM', function () {
        readFile.Read();
        login.GetUrl("https://opensource-demo.orangehrmlive.com/");
        login.EnterEmail("Admin");
        login.EnterPassword("admin123");
        login.ClickLogin();
    });
});
