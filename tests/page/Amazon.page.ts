import {Page, Locator} from '@playwright/test';
import { time } from 'console';
export class Loginpage{
    signinbutton: Locator;
    page: Page;
    phonenum: Locator;
    customername: Locator | undefined;
    password: Locator;
    continuebutton: Locator;
    Otp: Locator;
    accountlist: Locator;
    submitbutton: Locator;


    constructor(page: Page){
        this.page=page;
        this.accountlist=this.page.locator('[id=nav-link-accountList-nav-line-1]');
        // this.phonenum=this.page.locator("input[name='email']").waitFor({state:'visible'});
        this.phonenum = this.page.locator("input[name='email']");
        this.continuebutton=this.page.locator("//*[@id='continue']/span/input");
        this.password=this.page.locator('[id=ap_password]');
        this.signinbutton=this.page.locator("//*[@id='signInSubmit']");
        this.Otp=this.page.locator('//*[@id="cvf-submit-otp-button"]/span/input');
        this.submitbutton=this.page.getByRole("button", { name: "cvf-submit-otp-button" });
    }
    
    async gotoUrl(){
        await this.page.goto("https://www.amazon.in/")
    }

     async getaccountlist(){
        await this.accountlist.click();
        await this.page?.waitForTimeout(2000)
    }
    
    async getphonenum(email:string){
        await this.phonenum.fill(email)
        await this.page?.waitForTimeout(2000)
      }
    
     async getcontinuebutton(){
        await this.continuebutton.click()
      }
    
    
     async getPassword(password: string){
        await this.password.fill(password)
      }
    
      
     async getsignupbutton(){
        await this.signinbutton.click()
      }
    
     async getOtp(){
        await this.Otp.fill(toString())
       
      }
    
     async getsubmitbutton(){
        await this.submitbutton.click()
      }
    
}

 