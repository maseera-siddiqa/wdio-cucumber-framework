const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const checkboxesPage = require('../../pages/checkboxesPage');

Given('I am on the checkboxes page', async () => {
    await checkboxesPage.open();
});

When('I uncheck checkbox {int}' , async (number) => {
    await checkboxesPage.uncheck(number - 1);
});

When('I check checkbox {int}', async (number) => {
    await checkboxesPage.check(number - 1);
})

Then('checkbox {int} should be unchecked', async (number) => {
    const selected = await checkboxesPage.isCheckboxSelected(number - 1);
    expect(selected).to.be.false;
});

Then('checkbox {int} should be checked', async (number) => {
    const selected = await checkboxesPage.isCheckboxSelected(number - 1);
    expect(selected).to.be.true;
});