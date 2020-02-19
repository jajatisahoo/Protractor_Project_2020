"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginPage_1 = require("../Pages/LoginPage");
//import { ReadExcel } from "../Util/ReadPropertiesFile";
var login = new LoginPage_1.Login();
//let readFile=new ReadExcel();
describe('Login functionality', function () {
    it('login to orange CRM', function () {
        //readFile.Read();
        login.GetUrl("https://opensource-demo.orangehrmlive.com/");
        login.EnterEmail("Admin");
        login.EnterPassword("admin123");
        login.ClickLogin();
    });
});
