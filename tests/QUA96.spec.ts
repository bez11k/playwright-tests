import { test, expect } from '@playwright/test';
import ShopPage from '../pages/QUA96.page';

test.describe('Home', () => {
    let shopPage: ShopPage;
    test('Adding product to the basket', async ({ page }) => {

    shopPage = new ShopPage(page);

    // open the "Home" page
    await shopPage.navigate();

    // Adding an item to cart
    await shopPage.productItem.click();

    // Cart counter is displayed on a cart icon
    await shopPage.getCartCounter;

    })
})