import { Page, Locator, expect } from '@playwright/test';

class BlogPage{
    private page: Page;
    blogPageLink: Locator;
    postList: Locator;
    
    constructor (page: Page) {
        this.page = page;
        this.blogPageLink = page.locator('#menu-item-490').getByRole('link', { name: 'Blog' });
        this.postList = page.locator('#recent-posts-3 ul li');
    }

    async openHomePage() {
        await this.page.goto('https://practice.automationbro.com/');
    }

    async navigateToBlogPage() {
        await this.blogPageLink.click();
    }

    async countingNumberOfPosts() {
        return this.postList.count();
    }

    async checkingPostNameLength(minExpectedPostlengtht) {
        for (const el of await this.postList.elementHandles()) {
            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(minExpectedPostlengtht)
        } 
    }
}

export default BlogPage;