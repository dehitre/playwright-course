import {test, expect} from "@playwright/test"
import HomePage from "../pages/home.page";


test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
    
    test('Open home page and verify title', async ({ page }) => {
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

    test('Open about page and verify title', async ({ page }) => {
        await homePage.aboutLink.click();

        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click get started using CSS', async ({ page }) => {
        await homePage.getStartedButton.click();

        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text', async ({ }) => {
        const headingText =  homePage.headingText;

        await expect(headingText).toBeVisible();
    })

    test('Verify home link enabled', async ({ }) => {

       // const homeText = page.locator('#zak-primary-menu >> text=Home');
        const homeText = homePage.homeLink;

        await expect(homeText).toBeEnabled();
    })

    test('Search icon visible', async ({ }) => {
        const searchIcon = homePage.searchIcon;

        await expect(searchIcon).toBeVisible();
    })

    test('Verify text of all nav links', async ({ }) => {
        const expectedLinks = ["Home", "About", "Shop", "Blog", "Contact", "My account"]


        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);

        const blogLink = homePage.navLinks.nth(3);

        // eslint-disable-next-line playwright/prefer-web-first-assertions
        expect(await blogLink.textContent()).toEqual(expectedLinks[3]);


    })   

    
})
