import { Given, Then, When,setDefaultTimeout } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";
import { Loginpage } from "../page/trelloBoard.page";
import { Accesstoken, baseurl, api_key } from "../../axios/constant.spec";
import { BrowserContext } from "@playwright/test";
import { IWorld } from "@cucumber/cucumber";


import { boardNames, createBoardAPI, deleteBoardAPI } from "../supports/constants.spec";

let loginPage:Loginpage;
setDefaultTimeout(70000)

Given("I open trello board", async function () {
  loginPage =new Loginpage(this.page)
  await loginPage.gotoLoginPage("https://trello.com/")
});


When("I have entered valid credentials for login",async()=> {
  await loginPage.trellologinPage("jasasweesethy81@gmail.com","Guddy90901616");
})



// Then("I have created a new trello board",async () => {
//   await loginPage.createBoard("NewBoard")
// })

When("I create a Trello board via API with different boardNames", function () {
  return createBoardAPI()
    .then(async (board: { id: string; name: string }) => {
      this.boardId = board.id; 
      const boardName = board.name;
      console.log(`Trello board created: ${boardName}`);

      const boardLink = this.page.getByRole('link', { name: boardName }).first();
      await boardLink.waitFor({ state: "visible", timeout: 10000 });

      await Promise.all([
        this.page.waitForNavigation({ timeout: 10000 }),
        boardLink.click(),
      ]);
    })
    .catch((error: { message: string }) => {
      throw new Error("Failed to create Trello board: " + error.message);
    });
});


Then("I have created lists",async () => {
  await loginPage.boardActions("Stared","InProgress","Completed");
});

When("I have created cards",async () => {
  await loginPage.CardAdd("WorkStarted");
});

Then("I am performing dragAndDrop Actions",async () => {
     await loginPage.dragAndDropCard();
});


Then("I delete the created Trello board", async function () {
  if (!this.boardId) {
    throw new Error("Board ID not found");
  }

  await deleteBoardAPI(this.boardId);
  console.log(`${this.boardId} deleted successfully.`);
});



