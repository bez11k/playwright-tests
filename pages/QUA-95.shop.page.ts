import { Page, Locator, expect } from '@playwright/test';

class QUA95ShopPage{
    private page: Page;
    shopPageLink: Locator;

    constructor (page: Page) {
        this.page = page;
        this.shopPageLink = page.locator('#menu-item-567').getByRole('link', { name: 'Shop' });       
    }

    async openHomePage() {
        await this.page.goto('https://practice.automationbro.com/');
        await expect(this.page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    }

    async navigateToShopPage() {
        await this.shopPageLink.click();
        await expect(this.page).toHaveTitle('Shop – Practice E-Commerce Site');
    }

    async categorySelection(categoryName: string,
                            expectedCategoryUrl: string) {
        const productLocation = '//a[text()="'+ categoryName +'"]';
        const expectedCategoryLink = this.page.locator(productLocation);
        await expectedCategoryLink.click();
        await expect(this.page).toHaveURL(expectedCategoryUrl);
    }
}

export default QUA95ShopPage;