const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const addRemoveElementsPage = require('../../pages/addRemoveElementsPage');

Given('I am on the add and remove elements page', async () => {
  await addRemoveElementsPage.open();
});

When('I click on Add Element button', async () => {
    await addRemoveElementsPage.clickAdd();
});

Then('the number of delete buttons should be {int}', async (expectedCount) => {
    const count = await addRemoveElementsPage.getDeleteButtonCount();
    expect(count).to.equal(expectedCount);
});

When('I click on Add Element button {int} time(s)', async (clickCount) => {
    for (let i = 0; i < clickCount; i++) {
        await addRemoveElementsPage.clickAdd();
    }
});
