const { expect } = require("@playwright/test");

// Class representing the Proposify Home Page
export class ProposifyHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; // The page object from Playwright
    this.proposifyLogo = page.locator("#bw-sidebar > ul > li:nth-child(1) > a"); // Locator for the Proposify logo
    this.newProposalButton = page.locator(
      'button[data-testid="create-document-button"]:first-child',
    ); // Locator for the New Proposal button
    this.trashButton = page.locator(
      '//*[@id="root"]/div[1]/div/main/div/div/div/div[1]/div[2]/div/div[2]',
    ); // Locator for the Trash button
    this.emptyAllTrashButton = page.locator(".snackbar-btn"); // Locator for the Empty All Trash button
  }

  // Method to click on the Proposify logo
  async ClickProposifyLogo() {
    await this.proposifyLogo.click();
  }

  // Method to click on the New Proposal button
  async ClickNewProposal() {
    await this.newProposalButton.click();
  }

  // Method to select a filter by its value
  async SelectFilterByValue(value) {
    await this.page.click(`button[value="${value}"]`);
  }

  // Method to check if a template exists
  async CheckIfTemplateExists() {
    const element = this.page.locator(
      '//*[@id="8526b227-eefc-4306-ad48-237cae313e66"]/li',
    );
    expect(element).toBeTruthy();
  }

  // Method to select the Trash button
  async SelectTrashButton() {
    await this.trashButton.click();
  }

  // Method to click on the Empty All Trash button
  async EmptyAllTrash() {
    await this.emptyAllTrashButton.click();
  }

  // Method to confirm the action of emptying the trash
  async ConfirmEmptyTrashButton() {
    const elements = await this.page.$$('button[data-testid="buttonBase"]');
    await elements[3].click(); // Array indices start at 0, so index 3 is the fourth element
  }

  // Method to send the first template to the trash
  async SendFirstTemplateToTrash() {
    await this.page.waitForTimeout(1000); // waits for 1 seconds
    const sendToTrashButton = await this.page.$$(
      'button[data-testid="trash-area-Untitled Document"]',
    );
    await sendToTrashButton[0].click();
  }
}
