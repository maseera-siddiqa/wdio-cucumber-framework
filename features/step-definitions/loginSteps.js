const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginPage = require('../../pages/loginPage');

Given('I am on the login page', async () => {
    await loginPage.open();
});

When('I enter username {string}', async (username) => {
    await loginPage.enterUsername(username);
});

When('I enter password {string}', async (password) => {
    await loginPage.enterPassword(password);
});

When('I click on the login button', async () => {
    await loginPage.clickLogin();
});

Then('I should see success message', async () => {
    const successMessage = await loginPage.getFlashMessage();
    expect(successMessage).to.include('You logged into a secure area');
});

Then('I should see error message {string}', async (message) => {
    const errorMessage = await loginPage.getFlashMessage();
    expect(errorMessage).to.include(message);
});