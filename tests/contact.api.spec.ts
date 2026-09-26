import {test, expect, APIRequestContext} from "@playwright/test"
import ContactPage from "../pages/contact.page";
import APIController from "../controller/api.controller";

type User = {
        id: number;
        name: string;
        email: string;
        phone: string;
        website: string;
    };

test.describe('Test contact form', () => {
    let contactPage: ContactPage;
    let randomUser: User;



    test.beforeAll(async({})=>{
        await APIController.init();
        randomUser = await APIController.getRandomUser();
        const newUser = await APIController.createTodoForUser('Test Todo', false);
    })
    
     test('Verify contact success message', async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.navigate();


        await contactPage.submitForm(
            randomUser['name'],
            randomUser['email'],
            randomUser['phone'],
            randomUser['website']
        );

        const congratText = contactPage.successMessage;
        await expect(congratText).toBeVisible();


    })
    
})

// comment