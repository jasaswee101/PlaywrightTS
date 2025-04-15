import {test,expect} from '@playwright/test'

test('test', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.screenshot({path:'tests\videofile'+Date.now()+'Homepage.png'})
    await page.getByRole('link',{ name: 'Log in'}).click();
    await page.locator('#loginusername').fill("Jasaswees");
    await page.locator('#loginpassword').fill("test@1234");
    await page.getByRole('button', {name: 'Log in'}).click();
    await expect(page.locator('#logout2')).toBeVisible();
});