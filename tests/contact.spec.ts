import {test, expect} from "@playwright/test"
import {faker} from "@faker-js/faker";
import ContactPage from "../pages/contact.page";

test.describe('Test contact form', () => {
    let contactPage: ContactPage;
    
     test('Verify contact success message', async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();


        await contactPage.submitForm(faker.person.firstName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph(2));
        const congratText = contactPage.successMessage;
        await expect(congratText).toBeVisible();


    })
    
})
