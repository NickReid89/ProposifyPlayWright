# PlayWright Test Proposify
This repo manages PlayWright tests to test against https://app.proposify.com. It does this with the utilization of PlayWright that was wrote using JS. 

## Installation

To run the tests follow the following steps:
1) Download and install Node and NPM found here: https://nodejs.org/en/download
2) Download and install PlayWright here: https://playwright.dev/docs/intro.
3) Pull down this PlayWright repo.
4) In the PlayWright repo look for *.env.dist* and rename it to *.env* inside of the file fill in the username and password of the test user.
5) Look for playwright.config.js in the project and comment out any browsers you don't intend to test and run the command *npx playwright test*.
6) Alternatively run the command *npx playwright test --project=projectname*.
7) ensure only one browser is running at a type or you may find test collisions from using the same account.
8) success!
