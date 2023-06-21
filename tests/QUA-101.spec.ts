import { test, expect } from '@playwright/test';
 
test.describe('QUA-101', () => {
  test.use({storageState: 'notLoggedInState.json'})
  test('Adding product to basket', async ({ page }) => {
    // open URL Main Page
    await page.goto("https://practice.automationbro.com/");  
        
    // open URL Shop Page
    await page.goto("https://practice.automationbro.com/shop/");

    //Search and add to the card Zurich Watch
    do {
        await page.getByRole('link', { name: '→' }).click();
    } while (page.getByRole('link', { name: 'Zurich Watch $200.00' }) == null);
    await page.getByRole('link', { name: 'Add “Zurich Watch” to your cart' }).click();

    // Go to basket
    await page.getByRole('link', { name: 'View cart' }).click();

    // Click on the Zurich Watch
    await expect(page.getByRole('link', { name: 'Zurich Watch', exact: true })).toBeVisible();
    })
    
  })





