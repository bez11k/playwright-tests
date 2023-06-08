import { test, expect}  from '@playwright/test';

test.describe('My Account', () => {
    
    test('Access Orders', async ({page}) => {
        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(2) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async ({page}) => {
        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(3) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*downloads/);
    });
})