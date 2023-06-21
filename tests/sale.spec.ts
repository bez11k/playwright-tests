import { test } from '@playwright/test';

test.describe('onsale', () => {
    test.use({storageState: 'notLoggedInState.json'})

    test('onsale', async ({ page }) => {

    // open URL
    await page.goto('https://practice.automationbro.com/shop');  
    let totalNumberOfDiscounts = 0;
    // Counting a number of discounts

    if (page.locator('.next') !== null) {
        const currentNumberOfDiscounts = await page.locator('a>.onsale').count();
        totalNumberOfDiscounts = totalNumberOfDiscounts + currentNumberOfDiscounts;
        console.log('1-'+totalNumberOfDiscounts);
        await page.locator('.next').click();
    } 

    console.log('number of products with discounts = ' + totalNumberOfDiscounts);
    })
})  
