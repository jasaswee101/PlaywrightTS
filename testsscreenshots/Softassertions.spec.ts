import {test , expect} from '@playwright/test'

test ('Soft assertions', async({page}) => {
    await page.goto("https://www.demoblaze.com/")

    //Hard assertions
    // await expect(page).toHaveTitle('STORE');
    // await expect(page).toHaveURL('https://www.demoblaze.com/');
    // await expect(page.locator('.navbar-brand')).toBeVisible();


    //soft assertions
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})