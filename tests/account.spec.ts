import {test, expect} from '@playwright/test';
import AccountPage from '../pages/account.page';

test.describe('Test account', () => {

    let accountPage: AccountPage;

    test('Access Downloads', async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigate();
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloads/);
        
    });

    test('Access Address', async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigate();
        await page.locator(`li a[href*='orders']`).click()
        await expect(page).toHaveURL(/.*orders/);

    });
    

});

test.describe('Account Page', () => {
  test.use({ storageState: 'NotLoggedInStorageState.json' })

  test('Verify login and register is visible', async ({ page }) => {
    await page.goto('/my-account')
    await expect(page.locator('form[class*="login"]')).toBeVisible()
    await expect(page.locator('form[class*="register"]')).toBeVisible()
  });
})