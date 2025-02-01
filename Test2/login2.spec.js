import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "./login2.js";

describe("Login Tests", function () {
    this.timeout(0);
    /** @type {WebDriver} */
    let driver;
    let loginPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        loginPage = new Login(driver);
        
        await driver.get("https://www.saucedemo.com/");
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Test unsuccessful login", async function () {
        await loginPage.fillInUsernameField("standard_user");
        await loginPage.fillInPasswordField("pogresnaSifra");
        await loginPage.clickLoginButton();
        let usernameFieldClass = await loginPage.findUsernameFieldClass();
        let passwordFieldClass = await loginPage.findPasswordFieldClass();
        let errorMessageElementText = await loginPage.findErrorMessage();
        let errorMessageNotVisible = await loginPage.findErrorButton();

        expect(usernameFieldClass).to.equal("input_error form_input error");
        expect(passwordFieldClass).to.equal("input_error form_input error");
        expect(errorMessageElementText).to.equal("Epic sadface: Username and password do not match any user in this service");
        expect(errorMessageNotVisible).to.equal(true); 
    });
});