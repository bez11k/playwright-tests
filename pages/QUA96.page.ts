import { Page, Locator } from '@playwright/test';

class ShopPage {
    page: Page;
    productItem: Locator;
    cartIcon: any;
    

    constructor(page: Page) {
        this.page = page;
        this.productItem = page.locator('//*[@id="primary"]/ul/li[4]/a[2]');
        this.cartIcon = page.locator('//*[@id="header-action"]/ul/li[2]/a/span');
       
    }

    async navigate() {
        await this.page.goto('https://practice.automationbro.com/shop');
    }

    async getCartCounter() {
        await this.cartIcon.toContainText('1')
    }
}

export default ShopPage;