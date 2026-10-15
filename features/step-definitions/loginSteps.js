const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginPage = require('../../pages/loginPage');

Given('I am on the login page', async () => {
    await loginPage.open();
});

When('I enter the username {string}', async(username) => {
    await loginPage.enterUsername(username);
});

When('I enter password {string}', async(password) =>{
    await loginPage.enterPassword(password);
});

When('I click on the login button', async() => {
    await loginPage.clickLoginButton();
});

Then('I should see success message {string}', async(expectedMessage) => {
    const message = await loginPage.getFlashMessage();
    expect(message).to.include(expectedMessage);
});

Then('I should see the failure message {string}', async(expectedMessage) => {
    const failureMessage = await loginPage.getFlashMessage();
    expect(failureMessage).to.include(expectedMessage);
});