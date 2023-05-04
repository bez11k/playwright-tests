import { test, expect } from '@playwright/test';
import QUA94ContactPage from '../pages/QUA-94.contact.page';

test.describe('QUA-94', () => {
    let qua94ContactPage: QUA94ContactPage;
    test('QUA-94 POM', async ({ page }) => {
        qua94ContactPage = new QUA94ContactPage(page);
        // step 1 + check
        qua94ContactPage.openHomePage();
        //step 2 + check
        qua94ContactPage.navigateToContactPage();
        //step 3
        const phone = 'Call : +(123) 456-7890 Call : +977 123-456789';
        const email = 'zakra@demos.com first.last@demos.com';
        const location = 'Moon Street , 446 Jupiter, JP 44600';
        const openHours = 'Monday - Saturday : 9AM - 6 PM Sunday : Closed';
        await qua94ContactPage.compareContactUsDiv(phone,
                                                   email,
                                                   location,
                                                   openHours);
    })
})
