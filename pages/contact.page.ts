import { Page, Locator, expect } from '@playwright/test';
import FormComponent from './component/form.component';

class ContactPage{
    private page: Page;
    contactPageLink: Locator;
    successfulMessage: Locator;

    constructor (page: Page) {
        this.page = page;
        this.contactPageLink = page.locator('#menu-item-493').getByRole('link', { name: 'Contact' });
        this.successfulMessage = page.locator('text=Thanks for contacting us! We will be in touch with you shortly');
    }

    async openHomePage() {
        await this.page.goto('https://practice.automationbro.com/');
    }

    async navigateToContactPage() {
        await this.contactPageLink.click();
    }

    async fillAndSendMessage() {
        return new FormComponent(this.page);
    }
}

export default ContactPage;