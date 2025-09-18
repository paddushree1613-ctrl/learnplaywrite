// @ts-check
import { test, expect } from '@playwright/test';

test('verify login with valid credentials','async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Enter username
    await page.getByPlaceholder("Username").fill("Admin");
    // Enter password
    await page.getByPlaceholder("Password").fill("admin123");
    // Click login button
    await page.getByRole("button", { name: "Login" }).click();  
    // Verify user is logged in by checking for the presence of the dashboard   
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

})