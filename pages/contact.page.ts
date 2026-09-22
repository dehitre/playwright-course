import {Page, Locator} from "@playwright/test";

class ContactPage {
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    messageInput: Locator;
    submitButton: Locator;
    successMessage: Locator;
    constructor(private page: Page) {
        this.page = page;
        this.nameInput = page.getByRole('textbox', { name: 'Name *' });
        this.emailInput = page.getByRole('textbox', { name: 'Email *' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone *' });
        this.messageInput = page.getByRole('textbox', { name: 'Message' });
        this.submitButton = page.locator('text=Submit');
        this.successMessage = page.locator('text=Thanks for contacting us! We will be in touch with you shortly');
    }

     async navigate(){
        await this.page.goto('/contact');
    }
    async submitForm(name: string, email: string, phone: string, message: string) {
    await this.nameInput.fill(name)
    await this.emailInput.fill(email)
    await this.phoneInput.fill(phone)
    await this.messageInput.fill(message)
    await this.submitButton.click()
  }
}

export default ContactPage;