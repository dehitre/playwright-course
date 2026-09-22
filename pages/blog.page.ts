import { Page, Locator } from "@playwright/test";


class BlogPage {
    recentLinks: Locator;
    constructor(private page: Page) {
        this.page = page;
        this.recentLinks = page.locator("#recent-posts-3 ul li");

    }

     async navigate(){
        await this.page.goto('/blog');
    }
}
export default BlogPage;