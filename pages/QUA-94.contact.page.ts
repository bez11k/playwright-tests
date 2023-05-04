import { Page, Locator, expect } from '@playwright/test';

class QUA94ContactPage{
    private page: Page;
    contactPageLink: Locator;
    private phoneField: Locator;
    private emailField: Locator;
    private addressField: Locator;
    private timeField: Locator;

    constructor (page: Page) {
        this.page = page;
        this.contactPageLink = page.locator('#menu-item-493').getByRole('link', { name: 'Contact' });       
        this.addressField = page.locator('div [data-id="2972252"] p');
        this.emailField = page.locator('div [data-id="e556b3a"] p');
        this.phoneField = page.locator('div [data-id="620bdfd"] p');
        this.timeField = page.locator('div [data-id="588fc75"] p');
    }

    async openHomePage() {
        await this.page.goto('https://practice.automationbro.com/');
        await expect(this.page).toHaveTitle('Practice E-Commerce Site – Automation Bro');
    }

    async navigateToContactPage() {
        await this.contactPageLink.click();
        await expect(this.page).toHaveTitle('Contact – Practice E-Commerce Site');
    }

    async compareContactUsDiv(phone: string,
                              email: string,
                              location: string,
                              openHours: string) {
        await expect (this.phoneField).toHaveText(phone);
        await expect (this.emailField).toHaveText(email);
        await expect (this.addressField).toHaveText(location);
        await expect (this.timeField).toHaveText(openHours);                      
    }

}

export default QUA94ContactPage;