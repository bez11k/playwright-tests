import { test, expect, Page } from '@playwright/test';

test.describe.serial('My Account', () => {
    let page: Page;

    test.beforeAll( async ({browser}) => {
        page = await browser.newPage();
        await page.goto('/my-account');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('[value="Log in"]').click();
        await expect(page.locator('a:has-text("Logout")')).toBeVisible();
    })
    
    test('Access Orders', async () => {
//        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(2) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async () => {
//        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(3) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*downloads/);
    });
})

