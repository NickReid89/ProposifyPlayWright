const { ProposifyLogin } = require("./POM/login"); // Importing the ProposifyLogin class from the login module
const { ProposifyHomePage } = require("./POM/homePage"); // Importing the ProposifyHomePage class from the homePage module
const dotenv = require('dotenv');

// Read from default ".env" file.
dotenv.config();

// Function to be executed before each test
export const beforeEachTest = async ({ page }) => {
  // Navigate to the Proposify website
  await page.goto("https://www.proposify.com/");

  // Click on the button with class '.c-button--type-outline'
  await page.locator(".c-button--type-outline").click();

  // Create a new instance of the ProposifyLogin class
  const proposifyLogin = new ProposifyLogin(page);

  // Enter the username
  await proposifyLogin.EnterUserName(process.env.EMAIL);

  // Enter the password
  await proposifyLogin.EnterPassword(process.env.PASSWORD);

  // Click on the login button
  await proposifyLogin.PressLoginButton();

  // Create a new instance of the ProposifyHomePage class
  const proposifyHomePage = new ProposifyHomePage(page);

  // Click on the Proposify logo
  await proposifyHomePage.ClickProposifyLogo();
};
