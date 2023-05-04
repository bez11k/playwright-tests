import {test, expect} from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload file', () => {
    let cartPage: CartPage;
    test('should ipload a test file', async ({ page }) => {
        cartPage = new CartPage(page);

        // Open URL
        await page.goto("https://practice.automationbro.com/cart/");

        // provide test file path
        const filePath = path.join(__dirname, '../data/Capture0.png');
        
        // upload test file
        cartPage.uploadComponent().uploadFile(filePath);

        // assertion
        await expect(cartPage.uploadComponent().successTxt)
            .toContainText('uploaded successfully');
        
    })

    test('should ipload a test file on a hidden input field', async ({ page }) => {
        cartPage = new CartPage(page);

        // Open URL
        await page.goto("https://practice.automationbro.com/cart/");

        // provide test file path
        const filePath = path.join(__dirname, '../data/Capture0.png');

        // DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('input#upfile_1');
            if(selector) {
                selector.className = ''
            }
        })
        
        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error

        // click the submit button
        await page.locator('#upload_1').click();

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_1'))
            .toContainText('uploaded successfully');
        
    })
    
})


