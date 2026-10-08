const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const dropdownPage = require('../../pages/dropdownPage');

Given('I am on the dropdown page', async () => {
    await dropdownPage.open();
});

When('I select {string} from the dropdown', async (option) => {
    await dropdownPage.selectOption(option);
});

Then('{string} should be selected', async (option) => {
    const selected = await dropdownPage.getSelectedText();
    expect(selected).to.equal(option);
});