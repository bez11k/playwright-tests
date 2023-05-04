import { test, expect } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('blog page', () => {
  let blogPage: BlogPage;
    test('blog page', async ({ page }) => {
      blogPage = new BlogPage(page);
  
    // open URL
    await blogPage.openHomePage();  
          
    // Navigate to Blog page
    await blogPage.navigateToBlogPage(); 
    
    // Counting a number of posts
    const expectedPostNumber = 5;
    expect(await blogPage.countingNumberOfPosts()).toEqual(expectedPostNumber);
      
    // Check that number of charachters in each post > 10 
    const minExpectedPostlength = 10; 
    await blogPage.checkingPostNameLength(minExpectedPostlength)
    })
})