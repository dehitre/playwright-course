import { Page } from "@playwright/test";

class AccountPage {
    constructor(private page: Page) {
        this.page = page;
}
async navigate(){
        await this.page.goto('/my-account');
    }
}

export default AccountPage;