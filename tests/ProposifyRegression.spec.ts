// @ts-check
import { test } from '@playwright/test';
import { beforeEachTest } from '../hooks';
import { ProposifyHomePage } from '../POM/homePage';
import { ProposifyTemplateDocument } from '../POM/templateSettings';

// Log in with Test User.
test.beforeEach(beforeEachTest);

// Scenario One

// Generate the Document by clicking the New Document button
// Assert there is a filter bar
// Clicking on the Draft filter shows the document that was created on step 2.
// The returned document contains the status Draft.
// Navigate to trash
// Empty the trash
test('Scenario One', async ({ page }) => {
    const proposifyHomePage = new ProposifyHomePage(page);
    await proposifyHomePage.ClickNewProposal();

    const proposifyTemplateDocument = new ProposifyTemplateDocument(page);
    await proposifyTemplateDocument.verifyElementExists('#editor-toolbar-container');
    await proposifyTemplateDocument.VerifyStatusOfDocument('DRAFT');
    await proposifyTemplateDocument.ClickProposifyLogo();
    await proposifyHomePage.SelectFilterByValue('Draft');
    await proposifyHomePage.CheckIfTemplateExists();
    await proposifyHomePage.SendFirstTemplateToTrash();
    await proposifyHomePage.SelectTrashButton();
    await proposifyHomePage.EmptyAllTrash();
    await proposifyHomePage.ConfirmEmptyTrashButton();
});

// Scenario 2

//     Click on New Document
//     Click on content tab
//     Click on Image Block
//     Upload two images
test('Scenario Two', async ({ page }) => {
    const proposifyHomePage = new ProposifyHomePage(page);
    await proposifyHomePage.ClickNewProposal();

    const proposifyTemplateDocument = new ProposifyTemplateDocument(page);
    await proposifyTemplateDocument.verifyElementExists('#editor-toolbar-container');
    await proposifyTemplateDocument.ClickContentButton();
    await proposifyTemplateDocument.ClickImagesButton();
    await proposifyTemplateDocument.ClickAddImagesButton();
});

// Scenario 3

//     Click on New Document
//     Click on Signatures Tab
//     Drag Signature block to the right edge of the document

test('Scenario Three', async ({ page }) => {
    const proposifyHomePage = new ProposifyHomePage(page);
    await proposifyHomePage.ClickNewProposal();

    const proposifyTemplateDocument = new ProposifyTemplateDocument(page);
    await proposifyTemplateDocument.verifyElementExists('#editor-toolbar-container');
    await proposifyTemplateDocument.ClickAddSignaturesButton();
    await proposifyTemplateDocument.DragSignatureButtonTo();
});
