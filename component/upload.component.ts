import {Page, Locator} from "@playwright/test";

class UploadComponent{
    uploadInput: string;
    submitButton: Locator;
    successMessage: Locator;
    constructor(private page: Page) {
        this.page = page;
        this.uploadInput ='input#upfile_1';
        this.submitButton = page.locator('#upload_1');
        this.successMessage = page.locator('#wfu_messageblock_header_1_label_1');
    }

    async uploadFile(filePath: string){
        await this.page.setInputFiles(this.uploadInput,filePath);
        await this.submitButton.click();
    }

}

export default UploadComponent;