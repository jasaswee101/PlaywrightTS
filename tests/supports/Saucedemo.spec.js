import { test, expect } from '@playwright/test';

test("Login to Saucedemo", async ({ browser }) => {
  test.slow()
  const context = await browser.newContext();
  const page = await context.newPage();

  //User is on the Login Page
  await page.goto("https://www.saucedemo.com/");

  //Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
     await expect(page.locator(".login_logo")).toBeVisible()
     await expect(page.getByText("Accepted usernames are:")).toBeVisible()
     await expect(page).toHaveURL('https://www.saucedemo.com/');
     await expect(page.locator("#user-name")).toBeVisible()
     await expect(page.locator("#password")).toBeVisible()
     await expect(page.locator("#login-button")).toBeVisible()
     console.log("All the conditions are passed")

  //Login as a standard user
  await page.locator("#user-name").fill("standard_user")
  await page.locator("#password").fill("secret_sauce")
  await page.locator("#login-button").click()

   //User is on the Landing/Products page. Verify the Landing page logo and URL
     await expect(page.getByText("Products")).toBeVisible()
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
     console.log("Landing page logo and URL")

   // Verify the PRODUCTS title and peek image visible on the home page
   await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
   await expect(page.locator('#item_4_img_link')).toBeVisible();
   console.log("PRODUCTS title and peek image visible on the home page")

      // Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page
      await page.locator("#react-burger-menu-btn").click()
      await expect(page.getByText("All Items")).toBeVisible()
      await expect(page.locator("#about_sidebar_link")).toBeVisible()
      await expect(page.locator("#logout_sidebar_link")).toBeVisible()
      await expect(page.locator("#reset_sidebar_link")).toBeVisible()
      await page.locator("#react-burger-cross-btn").click()
      console.log("all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page")

  //// Verify the shopping cart icon and product sort container visible on the top right of the page
  await expect(page.locator(".shopping_cart_link")).toBeVisible()
  await expect(page.locator(".product_sort_container")).toBeVisible()
  console.log("shopping cart icon and product sort container visible on the top right of the page")

   // Verify the Inventory Product item list is visible
     // await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
     // await expect(page.locator("//a[@id='item_0_title_link']")).toBeVisible();
     // await expect(page.locator("//a[@id='item_1_title_link']")).toBeVisible();
     // await expect(page.locator('//a[@id="item_5_title_link"]')).toBeVisible();
     // await expect(page.locator('//a[@id="item_2_title_link"]')).toBeVisible();
     // await expect(page.locator('//a[@id="item_3_title_link"]')).toBeVisible();
   const itemids=['item_0_title_link','item_1_title_link','item_5_title_link','item_2_title_link','item_3_title_link']
   for(const id of itemids){
     console.log(`Checking visibility: #${id}`)
      await expect (page.locator(`#${id}`)).toBeVisible()
   }

  ///Select the Product sort container as “Price (low to high)” and verify the inventory item list is displayed correctly in the right order selected.
  await page.locator('.product_sort_container').selectOption("Price (low to high)")
  const prices=await page.locator(".inventory_item_price").allTextContents();
  const lowToHigh = [];
  for(const id of prices){
       lowToHigh.push(id.replace("$",""));
  }
  console.log(lowToHigh.join("\n"))

  ///Verify the footer text and swag bot footer is visible
  await expect(page.locator(".footer_copy")).toBeVisible();
  console.log("Footer is visible")

  //Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page
      await page.locator("#react-burger-menu-btn").click()
      await page.locator("#about_sidebar_link").click()
      await expect(page).toHaveURL("https://saucelabs.com/")
      await expect(page.getByText("Build apps users love with AI-driven insights")).toBeVisible()
      console.log("Navigating to saucelabs page")

  //Verify the Twitter, Facebook, Linkedin logo visible
  await page.goBack()
  await expect(page.locator(".social_twitter")).toBeVisible();
  await expect(page.locator(".social_facebook")).toBeVisible();
  await expect(page.locator(".social_linkedin")).toBeVisible();
  console.log("Social media icons are visible");

  // //Click on Twitter social link and verify user is navigated to Twitter page
  // const [twitterPage] = await Promise.all([
  //   context.waitForEvent('page'),
  //   page.locator(".social_twitter").click()
  // ]);
  // await twitterPage.waitForEvent('domcontentloaded');
  // await expect(twitterPage).toHaveURL("https://x.com/saucelabs");
  // await page.waitForTimeout(2000)
  // await expect(twitterPage.locator("//span[contains(text(),'Sauce Labs helps organizations deliver a trusted d')]")).toBeVisible();
  // await page.waitForTimeout(2000)
  // console.log("Navigated to Sauce Labs Twitter page");
  // await page.goBack()
  // await page.locator(".social_facebook").click()

  



 await page.close()
});
