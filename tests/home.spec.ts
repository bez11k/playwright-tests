import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';


test.describe('Home', () => {
  let homePage: HomePage;
  test('Open HomePage and verify title', async ({ page }) => {
    homePage = new HomePage(page);

    // open URL
    await homePage.navigate();

    // verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro'); 
  })



  test('Open AboutPage and verify title', async ({ page }) => {
    homePage = new HomePage(page);

    // open URL
    await page.goto ('https://practice.automationbro.com/about/');

    // verify title
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  })



  test('Click get started button using CSS Selector', async ({ page }) => {
    homePage = new HomePage(page)

    // open URL
    await homePage.navigate();

    await expect(page).not.toHaveURL(/.*get-started/);

    // Click the button
    await homePage.getStartedBtn.click();

    // verify URL has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  })



  test('Verify heading text is visible using text selector', async ({ page }) => {
    homePage = new HomePage(page);

    // open URL
    await homePage.navigate();

    // Check the text
    const headingText = await homePage.headingText

    // Verify heading text is visible
    await expect(headingText).toBeVisible();

  })



  test('Verify home link is enabled using text and css selector', async ({ page }) => {
    homePage = new HomePage(page);

    // open URL
    await homePage.navigate();

    // Check the home text
    const homeText = await homePage.homeLink;

    // Verify home text is enabled
    await expect(homeText).toBeEnabled();

  })



  test('Verify search icon is visible using xpath selector', async ({ page }) => {
    homePage = new HomePage(page);

    // open URL
    await homePage.navigate();

    // Check the search icon
    const searchIcon = await homePage.searchIcon;

    // Verify search icon is visible
    await expect(searchIcon).toBeVisible();

  })



  test('Verify text of all nav links', async ({ page }) => {
    homePage = new HomePage(page);

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
  
    // open URL
    await homePage.navigate(); 

    // Verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);

  })
})
