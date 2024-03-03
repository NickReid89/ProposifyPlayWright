const { expect } = require("@playwright/test");

// Class representing the Proposify Template Document
export class ProposifyTemplateDocument {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; // The page object from Playwright
    this.proposifyLogo = page.locator('.ant-menu-item[title="Documents List"]'); // Locator for the Proposify logo
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
      .locator(".document-status > *:first-child")
      .textContent();

    // Verify that the actual text matches the expected text
    expect(actualText).toBe(status);
  }

  async ClickContentButton() {
    await this.page
      .locator('.ant-tabs-tab[data-node-key="content_tab"]')
      .click();
  }

  async ClickImagesButton() {
    await this.page
      .locator('.ant-col.ant-col-12[data-testid="image-block-button"]')
      .click();
  }

  async UploadImage(imageName) {
    await this.page
      .locator('input[type="file"]')
      .setInputFiles(`./TestImages/${imageName}`);
  }

  async ClickAddSignaturesButton() {
    await this.page.locator("#rc-tabs-1-tab-signatures_tab").click();
  }

  async DragSignatureButtonTo() {
    const box = await this.page.locator(".file-drop-background").boundingBox();
    await this.page.locator(".signature_button.user_color.sunset").hover();
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + box.width - 100, box.y + box.height / 4);
    await this.page.mouse.up();
  }
}
