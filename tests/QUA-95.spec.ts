import { test, expect } from '@playwright/test';
import QUA95ShopPage from '../pages/QUA-95.shop.page';

test.describe('QUA-95', () => {
    let qua95ShopPage: QUA95ShopPage;
    test('QUA-95 POM', async ({ page }) => {
        qua95ShopPage = new QUA95ShopPage(page);
        // step 1 + check
        await qua95ShopPage.openHomePage();

        //step 2 + check
        await qua95ShopPage.navigateToShopPage();

        //step 3
        const categoryName = 'Watches';
        const expectedCategoryUrl = 'https://practice.automationbro.com/product-category/watch/';
        await qua95ShopPage.categorySelection(categoryName,
                                              expectedCategoryUrl);

    })
})
