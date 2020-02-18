import { browser, element, by } from "protractor";
export class Login{
    // using variables
    public static Email=element(by.id('txtUsername'));
    public static Password= element(by.id('txtPassword'));

    // using method
    GetUrl(url:string){
        browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }
    EnterEmail(emailid:string)
    {
        Login.Email.sendKeys(emailid);
    }
    EnterPassword(PasswordField:string)
    {
        Login.Password.sendKeys(PasswordField);
    }
    ClickLogin()
    {
        element(by.id('btnLogin')).click();
    }
}
//let login=new Login();