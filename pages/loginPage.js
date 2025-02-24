export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[id="userName"]';
        this.passwordInput = 'input[id="password"]';
        this.loginButton = 'button[id="login"]';
        this.successIndicator = 'text=Dashboard';
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async isLoginSuccessful() {
        return await this.page.locator(this.successIndicator).isVisible();
    }
}
