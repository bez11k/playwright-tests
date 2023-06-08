import { test, expect } from '@playwright/test';

test.describe('My Account', () => {
    test('Login', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('[value="Log in"]').click();
        await expect(page.locator('a:has-text("Logout")')).toBeVisible();
    })
    
    test('Access Orders', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(2) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*orders/);
    });

    test('Access Downloads', async ({ page }) => {
        await page.goto('/my-account');
        await page.locator('li.woocommerce-MyAccount-navigation-link:nth-child(3) > a:nth-child(1)').click();
        await expect(page).toHaveURL(/.*downloads/);
    });
})

