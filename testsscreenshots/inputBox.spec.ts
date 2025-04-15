import {test,expect} from '@playwright/test'

test('Handle inputbox', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //input-name 
    await page.locator('//input[@id="name"]').fill('jasaswee');
    await page.locator('//input[@id="email"]').fill('jasasweesethy81@gmail.com');
    await page.locator('//input[@id="phone"]').fill('7735726374');
    await page.locator('//textarea[@id="textarea"]').fill('Banglore');
    await page.waitForTimeout(2000);

    //single checkbox
    await page.locator('//input[@id="female"]').check();


    //multiple checkbox
    const checkboxsLocators=[ "//input[@id='sunday']","//input[@id='monday']","//input[@id='tuesday']"];
    for(const locator of checkboxsLocators){
        await page.locator(locator).check();
    }

    await page.waitForTimeout(2000);

    //multiple way to select option from dropdown
    await page.locator('#country').selectOption('India');
    await page.waitForTimeout(2000);

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Red','Blue','Green']);

    //select single option
    await page.locator('#colors').selectOption('Red');
    await page.waitForTimeout(2000);
    
    // await page.locator("#animals").selectOption('Dog');
    await page.selectOption('#animals',['Fox','Deer','Giraffe']);
    await page.waitForTimeout(2000);






})