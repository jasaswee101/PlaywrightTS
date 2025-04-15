import {test,expect} from '@playwright/test'


test("Login to Saucedemo",async({page})=>{
     //User is on the Login Page
     await page.goto("https://www.saucedemo.com/")

     // //Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
     // await expect(page.locator(".login_logo")).toBeVisible()
     // await expect(page.getByText("Accepted usernames are:")).toBeVisible()
     // await expect(page).toHaveURL('https://www.saucedemo.com/');
     // await expect(page.locator("#user-name")).toBeVisible()
     // await expect(page.locator("#password")).toBeVisible()
     // await expect(page.locator("#login-button")).toBeVisible()
     // console.log("All the conditions are passed")


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


     // Verify the shopping cart icon and product sort container visible on the top right of the page
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


     //Select the Product sort container as “Price (low to high)” and verify the inventory item list is displayed correctly in the right order selected.
      await page.locator('.product_sort_container').selectOption("Price (low to high)")
      const prices=await page.locator(".inventory_item_price").allTextContents();
      const lowToHigh = [];
      for(const id of prices){
           lowToHigh.push(Number(id.replace("$",""))*88);
      }
      console.log(lowToHigh.reverse().join("₹\n"))

})