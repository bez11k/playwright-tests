import { Page, Locator } from '@playwright/test';

class FormComponent {
    private page: Page;
    nameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    messageField: Locator;
    private submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#evf-277-field_ys0GeZISRs-1-container').getByLabel('Name *');
        this.emailField = page.locator('div').filter({ hasText: 'Email *' }).getByLabel('Email *');
        this.phoneField = page.locator('#evf-277-field_66FR384cge-3-container').getByLabel('Phone *');
        this.messageField = page.locator('#evf-277-field_yhGx3FOwr2-4-container').getByLabel('Message');
        this.submitBtn = page.getByRole('button', { name: 'Submit' });         
    }
    
    async fillForm(name: string, 
                   email: string,
                   phone: string,
                   message: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.phoneField.fill(phone);
        await this.messageField.fill(message);
        await this.submitBtn.click();
    }
}

export default FormComponent;