import { test, expect } from '@playwright/test';

test('checkbox1', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    const checkbox_status = await page.locator('input[type="checkbox"]').isChecked()

     console.log(checkbox_status)    
})
