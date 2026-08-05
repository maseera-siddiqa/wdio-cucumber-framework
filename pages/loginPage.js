class LoginPage {

    get usernameInput() {
        return $ ('#username');
    }

    get passwordInput() {
        return $ ('#password');
    }

    get loginButton() {
        return $ ('button[type="submit"]');
    }

    get flashMessage() {
        return $ ('#flash');
    }

    get logoutButton() {
        return $ ('a[href="/logout"]');
    }

    async open() {
        await browser.url('/login');
    }
    async enterUsername(username) {
        await this.usernameInput(username);
    }

    async enterPassword(password) {
        await this.passwordInput(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getFlashMessage() {
        await this.flashMessage.waitforDisplayed({timeout: 3000});
        return await this.flashMessage.getText();
    }

    async isLogoutButtonVisible() {
        await this.logoutButton.waiForDisplayed({timeout: 3000});
        return await this.logoutButton.isDisplayed();
    }


}

module.exports = new LoginPage();