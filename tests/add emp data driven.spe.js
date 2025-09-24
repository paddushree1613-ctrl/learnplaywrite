import { test , expect } from '@playwright/test';

const credentials = {
username: "Admin",
password: "admin123"

};

const addemployees = {
    emp1:{
    empfullname : "paddu",
    middlename: 'shree',
    lastname: 'm',
    },
    
    emp2:{
        empfullname:"rakshitha",
        middlename: "m",
        lastname: "shree",
    },
    emp3:{
    empfullname:"anusha",
    middlename:'anu',
    lastname:'m'
}
}
   

for (let EMPADD in addemployees) {
test (`Add employee Delails using datadriven -${addemployees[EMPADD].empfullname}`, async ({page}) => {
    //Login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")    
    await page.locator("//input[@placeholder='Username").fill(credentials.username);
    await page.locator("//input[@placeholder='Password']").fill(credentials.passaword);
    await page.locator("//button[contains(.,'Login')]").click();
        await page.locator("//input[@placeholder='First Name']").fill
        await page.locator("//input[@placeholder='Middle Name']").fill
        await page.locator("//input[@placeholder='Last Name']").fill
        await page.locator("//input[@fdprocessedid='7q1wq']").fill
)}


        
    










