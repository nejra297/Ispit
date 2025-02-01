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