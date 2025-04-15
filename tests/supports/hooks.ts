import { Before, After } from "@cucumber/cucumber";
import { deleteBoardAPI } from "./constants.spec";
 
Before(async function () {
  await this.init();
});
 
After(async function () {
  if (this.boardId) {
    console.log(`Deleting board with ID ${this.boardId}`);
    try {
      await deleteBoardAPI(this.boardId);
    } catch (error) {
      console.error("Failed to delete board:", error);
    }
  }
});


