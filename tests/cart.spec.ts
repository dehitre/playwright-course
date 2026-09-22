import {test, expect} from "@playwright/test"
import path from 'path';
import CartPage from "../pages/cart.page";  


test.describe('Test cart', () => {
    let cartPage: CartPage;

     const fileName = ['Ekaterina_Smirnova_CV.pdf', 'Ajax_1.jpeg'];
    
     for (const file of fileName) {
    test(`Add ${file}`, async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.navigate();
        const filePath = path.join(__dirname, `../data/${file}`);
        await cartPage.uploadComponent().uploadFile(filePath);
        
       // await successMessage.waitFor({ state: 'visible' });

        await expect(cartPage.uploadComponent().successMessage).toContainText('uploaded successfully', { timeout: 10000 });
    })
}

    test('Add file1', async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.navigate();
        const filePath = path.join(__dirname,'../data/Ajax_1.jpeg');
        await page.evaluate(()=>{
            const selector = document.querySelector('#upfile_1');
            if(selector){
                selector.className = '';
            }
        })
        // eslint-disable-next-line playwright/prefer-locator
        await page.setInputFiles('input#upfile_1',filePath);
        await page.locator('#upload_1').click();
       
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');
    })

  

    
})
