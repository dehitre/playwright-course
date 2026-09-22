import { FullConfig,chromium } from '@playwright/test';



async function globalSetup(config:FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage()
    await page.goto('https://practice.sdetunicorns.com/my-account')
    await page.context().storageState({ path: 'NotLoggedInStorageState.json' });

    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('button[name="login"]').click();
  //  await page.getByRole('link', { name: 'Log out' }).waitFor();

    await page.context().storageState({ path: 'LoggedinStorageState.json' });
    await browser.close();
    
}

export default globalSetup;