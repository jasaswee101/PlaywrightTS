import {Page, Locator, BrowserContext} from '@playwright/test';
export class Loginpage{

    page: Page;
    loginLink:Locator;
    EmailId:Locator;
    continueButton:Locator;
    rememberme:Locator;
    password:Locator;
    login:Locator;
    boardcrt:Locator;
    BoardTitle:Locator;
    createButton:Locator;

    anotherList:Locator;
    EnterListName:Locator;
    addList:Locator;
   
    addaCard:Locator;
    cardInputField:Locator;
    addCardSubmmitButton:Locator;
    cardname:Locator;

    SecListName:Locator;
    secAddList:Locator;
    thirdListname:Locator;
    thirdAddList:Locator;

    toDo:Locator;
    Doing:Locator;

  
    constructor(page:Page){
        this.page=page;
        this.loginLink=this.page.locator("//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");
        this.EmailId=this.page.locator('//input[@id="username"]');
        this.continueButton = this.page.locator('//button[@id="login-submit"]')
        this.rememberme=this.page.locator('//input[@type="checkbox"]')
        this.password=this.page.locator('//input[@id="password"]')
        this.login=this.page.locator("(//span[normalize-space()='Log in'])[1]")

        //boardcreation
        this.boardcrt=this.page.getByText('Create new board')
        this.BoardTitle=this.page.getByTestId("create-board-title-input")
        this.createButton=this.page.getByTestId("create-board-submit-button")
        

        //list creation
        this.anotherList=this.page.locator("//div[@class='WC6fBZ3Z4IYlvP']//button[normalize-space()='Add another list']")
        this.EnterListName=this.page.locator("textarea[placeholder='Enter list name…']")
        this.addList=this.page.locator("//button[@type='submit']")

        this.SecListName=this.page.locator("(//textarea[@placeholder='Enter list name…'])[1]")
        // this.SecListName=this.page.locator("textarea[placeholder='Enter list name…']")
        this.secAddList=this.page.locator("(//button[normalize-space()='Add list'])[1]")

        this.thirdListname=this.page.locator("(//textarea[@placeholder='Enter list name…'])[1]")
        this.thirdAddList=this.page.locator("//button[normalize-space()='Add list']")

        

        //card creation
        this.addaCard=this.page.locator("(//button[@type='button'][normalize-space()='Add a card'])[1]")
        this.cardInputField=this.page.locator('//li[@class="tBRLg6uDC7sSyw"][1]//textarea[@data-testid="list-card-composer-textarea"]')
        this.addCardSubmmitButton=this.page.locator('//li[@class="tBRLg6uDC7sSyw"][1]//button[@data-testid="list-card-composer-add-card-button"]')
        this.cardname=this.page.locator("//a[@class='NdQKKfeqJDDdX3']")



        this.toDo=this.page.locator("//a[@class='NdQKKfeqJDDdX3']")
        this.Doing=this.page.locator("//li[@class='tBRLg6uDC7sSyw'][2]//button[@data-testid='list-add-card-button']")


    }
    async gotoLoginPage(url: string) {
        await this.page.goto(url);
        await this.page.setViewportSize({ width: 1920, height: 1040 });
    }

    async trellologinPage(email: string, password: string) {
        await this.loginLink.click();
        await this.EmailId.fill(email);
        await this.rememberme.check();
        await this.continueButton.click();
        await this.password.fill(password);
        await this.login.click();
    }

    async createBoard(boardName:string) {
        await this.boardcrt.click(); 
        await this.BoardTitle.click(); 
        await this.BoardTitle.fill(boardName); 
        await this.createButton.click()
    }

    async boardActions(Stared: string, InProgress: string, Completed: string){
        await this.anotherList.click()
        await this.EnterListName.waitFor({ state: "visible" });
        await this.EnterListName.fill(Stared);
        await this.addList.click();
        
        await this.SecListName.waitFor({ state: "visible" });
        await this.SecListName.fill(InProgress);  
        await this.secAddList.click()  //"Doing"
     
    
        await this.thirdListname.waitFor({ state: "visible" });
        await this.thirdListname.fill(Completed);    //"Done"
        await this.thirdAddList.click();
   

     }

      async CardAdd(WorkStarted: string) {
        await this.addaCard.click();
        await this.cardInputField.fill(WorkStarted); // "Work Started"
        await this.addCardSubmmitButton.click();
        await this.cardname.isVisible();
      }
      

    async dragAndDropCard(){
        await this.toDo.dragTo(this.Doing)

    }


}
    

        