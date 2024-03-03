// Class representing the Proposify Login page
export class ProposifyLogin {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page; 
    this.emailTextField = page.locator("#pyLoginEmail"); // Locator for the email text field
    this.passwordField = page.locator("#pyLoginPassword"); // Locator for the password field
    this.loginButton = page.locator("#pyLoginFormSubmitButton"); // Locator for the login button
  }


  async EnterUserName(email) {
    await this.page.waitForSelector("#pyLoginEmail");
    await this.emailTextField.fill(email);
  }

  async EnterPassword(password) {
    await this.page.waitForSelector("#pyLoginPassword");
    await this.passwordField.fill(password);
  }

  async PressLoginButton() {
    await this.loginButton.click();
  }
}
