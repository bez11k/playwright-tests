import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import FormComponent from '../pages/component/form.component';


test.describe('sending form', () => {
  let contactPage: ContactPage;

  test('sending form', async ({ page }) => {
    contactPage = new ContactPage(page);
    // open URL
    await contactPage.openHomePage();

    // Navigate to Contact page
    await contactPage.navigateToContactPage();

    // Filling in 4 text fields and submit
    const name = 'Max';
    const email = 'bez12@gmail.com';
    const phone = '123421';
    const message = 'message';
    await (await contactPage.fillAndSendMessage()).fillForm(name, email, phone, message);

    // Check the message
    await expect(contactPage.successfulMessage).toBeVisible();
  })
})