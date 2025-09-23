const { test, expect } = require('@playwright/test');

// @ts-check

test('Green cart ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#//');
  await expect(page).toHaveTitle(/Playwright/);
  await page.locator("//h4[text()='brocolli - Kg']/../div]").click()
  await page.locator("//h4[text()='Cucumber - - Kg']/../div]").click()
const pricel = await page.locator("https://rahulshettyacademy.com/seleniumPractise/#/")
});


  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.

