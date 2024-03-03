const { expect } = require("@playwright/test");

// Class representing the Proposify Home Page
export class ProposifyHomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; 
    this.proposifyLogo = page.locator(
      'a[href="https://gmail-235190.fe.proposify.com/pipeline"]',
    ); // Locator for the Proposify logo
    this.newProposalButton = page.locator(
      'button[data-testid="create-document-button"]:first-child',
    ); // Locator for the New Proposal button
    this.trashButton = page.locator('.ant-tabs-tab[data-node-key="trash"]'); // Locator for the Trash button
    this.emptyAllTrashButton = page.locator(".snackbar-btn"); // Locator for the Empty All Trash button
  }

  async ClickProposifyLogo() {
    await this.proposifyLogo.click();
  }

  async ClickNewProposal() {
    await this.newProposalButton.click();
  }

  // Method to select a filter by its value
  async SelectFilterByValue(value) {
    await this.page.click(`button[value="${value}"]`);
  }

  // Method to check if at least one template draft exists.
  async CheckIfTemplateExists() {
    const element = this.page.locator(".ant-list-items > a:first-child");
    expect(element).toBeTruthy();
  }

  async SelectTrashButton() {
    await this.trashButton.click();
  }

  async EmptyAllTrash() {
    await this.emptyAllTrashButton.click();
  }

  // Clicks yes button in confirmation modal.
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
