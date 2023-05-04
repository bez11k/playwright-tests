import { test, expect } from '@playwright/test';

test.describe('bloc 4. Homework', () => {
  
  test('Part 1', async ({ page }) => {
    // open URL
    await page.goto ('https://practice.automationbro.com/');

    // Navigate to Contact page
    await page.locator('#menu-item-493').getByRole('link', { name: 'Contact' }).click();

    // Filling in 4 text fields and submit
    await page.locator('#evf-277-field_ys0GeZISRs-1-container').getByLabel('Name *').fill('Max');
    await page.locator('div').filter({ hasText: 'Email *' }).getByLabel('Email *').fill('nomail@gmail.com');
    await page.locator('#evf-277-field_66FR384cge-3-container').getByLabel('Phone *').fill('123456');
    await page.locator('#evf-277-field_yhGx3FOwr2-4-container').getByLabel('Message').fill('messaga');
    await page.getByRole('button', { name: 'Submit' }).click();

    // Check the message
    await expect(page.locator('text=Thanks for contacting us! We will be in touch with you shortly')).toBeVisible();
  })

  test('Part 2', async ({ page }) => {
  
  // open URL
  await page.goto('https://practice.automationbro.com/');  
    
  // Navigate to Blog page
  await page.locator('#menu-item-490').getByRole('link', { name: 'Blog' }).click(); 

  // Counting a number of posts
  const numberOfPosts = await page.locator('#recent-posts-3 li').getByRole('link').count();
  console.log('number of posts = ' + numberOfPosts);

  // Saving all post in variable
  const postList = page.locator('#recent-posts-3 li')

  // Check that number of charachters in each post > 10 
  for (const el of await postList.elementHandles()) {
    expect ((await el.textContent()).length).toBeGreaterThan(10)
  }

  })
})
