import { By, until, WebDriver } from "selenium-webdriver";

class Login {

    constructor(driver) {
            /** @type {WebDriver} */
            this.driver = driver;
            this.loginButton = By.id("login-button");
            this.usernameField = By.id("user-name");
            this.passwordField = By.id("password");
            this.errorMessageElement = By.css('h3[data-test="error"]');
            this.errorButton = By.css(".error-button");
            this.cartItem1 = By.xpath("//*[ @class='inventory_item_name' and text()='Sauce Labs Backpack']");
            this.cartItem2 = By.xpath("//*[ @class='inventory_item_name' and text()='Sauce Labs Bike Light']");
            
    }
    async fillInUsernameField(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField));
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    } 

    async fillInPasswordField(password) {
        let passwordField = await this.driver.findElement(this.passwordField);
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async clickLoginButton() {
        let loginButton = await this.driver.findElement(this.loginButton);
        await loginButton.click();
    }

    async findUsernameFieldClass() {
        let usernameField = await this.driver.findElement(this.usernameField);
        let usernameFieldClass = await usernameField.getAttribute("class");
        return usernameFieldClass;
    }

    async findPasswordFieldClass() {
        let passwordField = await this.driver.findElement(this.passwordField);
        let passwordFieldClass = await passwordField.getAttribute("class");
        return passwordFieldClass;

    }

    async findErrorMessage() {
        let errorMessageElement = await this.driver.findElement(this.errorMessageElement);
        let errorMessageElementText = await errorMessageElement.getText();
        return errorMessageElementText;

    }

    async findErrorButton() {
        let errorMessageElement = await this.driver.findElement(By.css('h3[data-test="error"]'));
        let errorButton = await this.driver.findElement(this.errorButton);
        await errorButton.click();
        return await this.driver.wait(until.stalenessOf(errorMessageElement));

    }
    
}
export { Login };