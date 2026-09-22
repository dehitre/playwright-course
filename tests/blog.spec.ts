import {test, expect} from "@playwright/test"
import BlogPage from "../pages/blog.page";

test.describe('Blog tests', () => {
    let blogPage: BlogPage;
    
    test('Check Blog', async ({ page }) => {
        blogPage = new BlogPage(page);
        await blogPage.navigate();
       
        const recentLinks = blogPage.recentLinks;
        await expect.soft(recentLinks).toHaveCount(5);
        for( const el of await recentLinks.allTextContents()){
            expect(el.trim().length).toBeGreaterThanOrEqual(10);

        }
       


    })

})
