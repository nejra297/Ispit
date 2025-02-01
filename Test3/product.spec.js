import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { ProductPage } from "./product.js";

describe("Sauce Demo Tests", function () {
    this.timeout(0);
    /** @type {WebDriver} */
    let driver;
    let productPage;

    beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        productPage = new ProductPage(driver);
        
        await driver.get("https://www.saucedemo.com/");
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Test shopping for items", async function () {
        await productPage.fillInUsernameField("standard_user");
        await productPage.fillInPasswordField("secret_sauce");
        await productPage.clickLoginButton();
        let productsPageTitleText = await productPage.getPageTitleText();
        await productPage.addItemsToCart();
        let cartNumberText = await productPage.checkCartNumber();
        await productPage.clickCartIcon();
        let yourCartPageTitleText =  await productPage.getPageTitleText();
        let backpackExists = await productPage.isProductInCart("Sauce Labs Backpack");
        let bikeLightExists = await productPage.isProductInCart("Sauce Labs Bike Light");
        await productPage.clickCheckoutButton();
        let checkoutPageTitleText = await productPage.getPageTitleText();
        await productPage.enterCheckoutInformation("Nejra", "Halilovic", "71000")
        await productPage.clickContinueButton();
        let overviewPageTitleText = await productPage.getPageTitleText();
        let backpackExistsOverview = await productPage.isProductInCart("Sauce Labs Backpack");
        let bikeLightExistsOverview = await productPage.isProductInCart("Sauce Labs Bike Light");
        await productPage.clickFinishButton();
        let checkoutCompleteTitleText = await productPage.getPageTitleText();
        await productPage.clickMenuButton();
        await productPage.clickLogoutButton();
        let currentUrl = await driver.getCurrentUrl();


        expect(productsPageTitleText).to.equal("Products");
        expect(cartNumberText).to.equal("2");
        expect(yourCartPageTitleText).to.equal("Your Cart");
        expect(backpackExists).to.be.true;
        expect(bikeLightExists).to.be.true;
        expect(checkoutPageTitleText).to.equal("Checkout: Your Information");
        expect(overviewPageTitleText).to.equal("Checkout: Overview");
        expect(backpackExistsOverview).to.be.true;
        expect(bikeLightExistsOverview).to.be.true;
        expect(checkoutCompleteTitleText).to.equal("Checkout: Complete!");
        expect(currentUrl).to.equal("https://www.saucedemo.com/");
    });
});