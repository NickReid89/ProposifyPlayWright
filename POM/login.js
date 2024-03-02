// Class representing the Proposify Login page
export class ProposifyLogin {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; // The page object from Playwright
    this.emailTextField = page.locator("#pyLoginEmail"); // Locator for the email text field
    this.passwordField = page.locator("#pyLoginPassword"); // Locator for the password field
    this.loginButton = page.locator("#pyLoginFormSubmitButton"); // Locator for the login button
  }

  // Method to enter the username in the email text field
  async EnterUserName(email) {
    await this.page.waitForSelector(this.emailTextField);
    await this.emailTextField.fill(email);
  }

  // Method to enter the password in the password field
  async EnterPassword(password) {
    await this.page.waitForSelector(this.passwordField);
    await this.passwordField.fill(password);
  }

  // Method to click on the login button
  async PressLoginButton() {
    await this.loginButton.click();
  }
}
