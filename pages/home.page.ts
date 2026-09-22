import{Page, Locator} from '@playwright/test';

class HomePage{
    aboutLink: Locator;
    getStartedButton: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    constructor(private page: Page) {
        this.page = page;
        this.aboutLink = page.locator('#menu-item-491').getByRole('link', { name: 'About' });
        this.getStartedButton = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        this.navLinks = page.locator("#zak-primary-menu li[id*=menu]");
    }

    async navigate(){
        await this.page.goto('/');
    }
    getNavLinksText(){
        return this.navLinks.allTextContents();
    }



}
export default HomePage;