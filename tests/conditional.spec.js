// @ts-check
import { test, expect } from '@playwright/test';

test('check box', async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    const checkbox_status = await page.locator('input[name="chk_altemailf2706152"]').isChecked()

     console.log(checkbox_status)    
})
