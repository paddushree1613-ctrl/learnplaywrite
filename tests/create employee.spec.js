import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("(//div[contains(@class,'oxd-sheet oxd-sheet--rounded')]//div)[1]
    await page.locator("(//div[@class='oxd-input-group oxd-input-field-bottom-space']//div)[2]")
    
})