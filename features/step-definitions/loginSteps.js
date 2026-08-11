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

Then('I should see success message', async() => {
    const message = await loginPage.getFlashMessage();
    expect(message).to.include('You logged into a secure area!');
});

Then('I should see the failure message', async() => {
    const failureMessage = await loginPage.getFlashMessage();
    expect(failureMessage).to.include('Your username is invalid!');
});