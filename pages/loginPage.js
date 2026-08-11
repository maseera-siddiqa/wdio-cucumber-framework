class LoginPage {

    get usernameInput() {
        return $('#username');
    } 

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('button[type="submit"]');
    }

    get flashMessage() {
        return $('#flash');
    }

    async open() {
        await browser.url('/login');
    }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getFlashMessage() {
        return await this.flashMessage.getText();
    }
}

module.exports = new LoginPage();