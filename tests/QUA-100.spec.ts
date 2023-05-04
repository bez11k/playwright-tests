import { test, expect } from '@playwright/test';
test.describe('QUA-100', () => {
  test('Find product reviews', async ({ page }) => {
    // Open URL Shop Page
    await page.goto("https://practice.automationbro.com/shop/");

    // Redirect by Canon Antique Camera product link
    await page.getByRole('link', { name: 'Sale! Canon Antique Camera $400.00' }).click();

    // Activate Reviews tab
    await page.getByRole('link', { name: 'Reviews (0)' }).click();

    // Check that Reviews tab is active
    const expectedTabName = page.locator('#reviews');
    await expect(expectedTabName).toHaveClass('woocommerce-Reviews');
  })
})
  
  




