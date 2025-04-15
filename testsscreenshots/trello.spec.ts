import {test,expect} from '@playwright/test'
import { Loginpage } from '../tests/page/trelloBoard.page'

test("Create trello board",async ({page})=>{
    test.slow()
    const login = new Loginpage(page)
    await login.gotoLoginPage("https://trello.com/")
    await login.trellologinPage("jasasweesethy81@gmail.com","Guddy90901616")
    await login.createBoard("New Board")
    await login.boardActions("ToDo","Doing","Done")
    await login.CardAdd("Working")
    await login.dragAndDropCard()

})