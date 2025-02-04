import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { testData } from '../testData';

testData.urls.forEach((url) => {
    test(`Login test for ${url}`, async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto(url);
        await loginPage.login(testData.credentials.username, testData.credentials.password);

        await loginPage.isLoginSuccessful();
    });
});