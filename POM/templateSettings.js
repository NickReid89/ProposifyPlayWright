const { expect } = require("@playwright/test");

// Class representing the Proposify Template Document
export class ProposifyTemplateDocument {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; // The page object from Playwright
    this.proposifyLogo = page.locator(
      '//*[@id="root"]/div[1]/aside/aside/div/ul/li[1]',
    ); // Locator for the Proposify logo
  }

  // Method to verify if an element exists on the page
  async verifyElementExists(selector) {
    expect(this.page.locator(selector)).toBeTruthy();
  }

  // Method to click on the Proposify logo
  async ClickProposifyLogo() {
    await this.proposifyLogo.click();
  }

  // Method to verify the status of a document
  async VerifyStatusOfDocument(status) {
    // Get the text content of the child element
    const actualText = await this.page
      .locator(
        '//*[@id="root"]/div[1]/div/main/header/header/div[1]/div[1]/div/div[1]',
      )
      .textContent();

    // Verify that the actual text matches the expected text
    expect(actualText).toBe(status);
  }

  async ClickContentButton(){
    await this.page.locator('//*[@id="root"]/div[1]/div/main/section/aside/div/div/div[1]/div[1]/div/div[2]').click();
  }

  async ClickImagesButton(){
    await this.page.locator('//*[@id="rc-tabs-1-panel-content_tab"]/div[1]/div[2]/div[2]').click();
  }

  async ClickAddImagesButton()
  {
   await this.page.locator('//*[@id="rc-tabs-1-panel-content_tab"]/div[3]/div[3]/div/ul/li/div').click();
   await this.page.locator('//*[@id="rc-tabs-1-panel-content_tab"]/div[3]/div[3]/div/ul/li/div').setInputFiles('../TestImages/fixtures/TestImageOne.jpg','../TestImages/fixtures/TestImageTwo.png');
  }

  async ClickAddSignaturesButton(){
    await this.page.locator('#rc-tabs-1-tab-signatures_tab').click();
  }

  async DragSignatureButtonTo(){
    const box = await this.page.locator('.file-drop-background').boundingBox();
    await this.page.locator('.signature_button.user_color.sunset').hover();
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + box.width -100, box.y + box.height / 4);
    await this.page.mouse.up();
  }
}
