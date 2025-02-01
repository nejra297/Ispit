import { By, until, WebDriver } from "selenium-webdriver";

class ProductPage {

    constructor(driver) {
            /** @type {WebDriver} */
            this.driver = driver;
            this.loginButton = By.id("login-button");
            this.usernameField = By.id("user-name");
            this.passwordField = By.id("password");
            this.pageTitle = By.css('span[data-test="title"]');
            this.addToCartButton1 = By.id("add-to-cart-sauce-labs-backpack");
            this.addToCartButton2 = By.id("add-to-cart-sauce-labs-bike-light");
            this.cartNumber = By.css(".shopping_cart_badge");
            this.cartIcon = By.css(".shopping_cart_link");
            this.checkoutButton = By.id("checkout");
            this.firstName = By.id("first-name");
            this.lastName = By.id("last-name");
            this.postalCode = By.id("postal-code");
            this.continueButton = By.id("continue");
            this.finishButton = By.id("finish");
            this.menuButton = By.id("react-burger-menu-btn");
            this.logoutButton = By.id("logout_sidebar_link");
            
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

    async getPageTitleText() {
        let pageTitle = await this.driver.findElement(this.pageTitle);
        let pageTitleText = await pageTitle.getText();
        return pageTitleText;
    }

    async addItemsToCart() {
        let addToCartButton1 = await this.driver.findElement(this.addToCartButton1);
        await addToCartButton1.click();

        let addToCartButton2 = await this.driver.findElement(this.addToCartButton2);
        await addToCartButton2.click();
        
    }

    async checkCartNumber() {
        let cartNumber = await this.driver.findElement(this.cartNumber);
        let cartNumberText = await cartNumber.getText();
        return cartNumberText;
    }

    async clickCartIcon() {
        let cartIcon = await this.driver.findElement(this.cartIcon);
        await cartIcon.click();
        
    }

    async isProductInCart(productName) {
        let product = await this.driver.wait(
            until.elementLocated(By.xpath(`//div[text()='${productName}']`)));
        return product.isDisplayed();
        
    }

    async clickCheckoutButton() {
        let checkoutButton = await this.driver.findElement(this.checkoutButton);
        await checkoutButton.click();
        
    }

    async enterCheckoutInformation(firstname, lastname, postalcode) {
        let firstName = await this.driver.wait(until.elementLocated(this.firstName));
        await this.driver.wait(until.elementIsVisible(firstName));
        await firstName.click();
        await firstName.clear();
        await firstName.sendKeys(firstname);

        let lastName = await this.driver.wait(until.elementLocated(this.lastName));
        await this.driver.wait(until.elementIsVisible(lastName));
        await lastName.click();
        await lastName.clear();
        await lastName.sendKeys(lastname);

        let postalCode = await this.driver.wait(until.elementLocated(this.postalCode));
        await this.driver.wait(until.elementIsVisible(postalCode));
        await postalCode.click();
        await postalCode.clear();
        await postalCode.sendKeys(postalcode);
        
    }
    
    async clickContinueButton() {
        let continueButton = await this.driver.findElement(this.continueButton);
        await continueButton.click();
        
    }

    async clickFinishButton() {
        let finishButton = await this.driver.findElement(this.finishButton);
        await finishButton.click();
        
    }

    async clickMenuButton() {
        let menuButton = await this.driver.findElement(this.menuButton);
        await menuButton.click();
        
    }

    async clickLogoutButton() {
        let logoutButton = await this.driver.wait(until.elementLocated(this.logoutButton));
        await this.driver.wait(until.elementIsVisible(logoutButton));
        await logoutButton.click();
    } 
}
export { ProductPage };