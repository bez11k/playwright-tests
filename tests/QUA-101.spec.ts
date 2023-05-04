import { test, expect } from '@playwright/test';
 
test.describe('QUA-101', () => {
  test('Adding product to basket', async ({ page }) => {
    // open URL Main Page
    await page.goto("https://practice.automationbro.com/");  
        
    // open URL Shop Page
    await page.goto("https://practice.automationbro.com/shop/");

    //Search Zurich Watch
    do {
        await page.getByRole('link', { name: '→' }).click();
    } while (page.getByRole('link', { name: 'Add “Zurich Watch” to your cart' }) == null);
    await page.getByRole('link', { name: 'Add “Zurich Watch” to your cart' }).click();

    // Go to basket
    await page.getByRole('link', { name: 'View cart' }).click();

    // Click on the Zurich Watch
    await expect(page.getByRole('link', { name: 'Zurich Watch' })).toBeVisible();
    })
    
  })
  




