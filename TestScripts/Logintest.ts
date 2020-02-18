import { Login } from "../Pages/LoginPage";
import { ReadExcel } from "../Util/ReadPropertiesFile";
let login=new Login();
let readFile=new ReadExcel();
describe('Login functionality',function()
{
it('login to orange CRM',function()
{
    readFile.Read();
    login.GetUrl("https://opensource-demo.orangehrmlive.com/");
login.EnterEmail("Admin");
login.EnterPassword("admin123");

login.ClickLogin();
});

});