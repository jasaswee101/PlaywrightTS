// import {Page, Locator} from '@playwright/test';

// import { twoKAccount } from '../utilities/api';

// export class TwoKAccount{
//     page: Page;
//     countryDropDown: Locator;
//     dobMonthDropDown: Locator;
//     dobYearDropDown: Locator;
//     continueButton: Locator;
//     email: Locator;
//     confirmemail: Locator;
//     password: Locator;
//     confirmPw: Locator;
//     displayname: Locator;


//     constructor(page: Page){
//         this.page=page;
//         this.countryDropDown = this.page.locator("#country");
//         this.dobMonthDropDown = this.page.locator("#month");
//         this.dobYearDropDown = this.page.locator("#year");
//         this.continueButton = this.page.getByRole("button", { name: "continue" });
//         this.email = this.page.locator('[id="email"]');
//         this.confirmemail = this.page.locator('[id="confirmEmail"]');
//         this.password = this.page.locator('[id="password"]')
//         this.confirmPw = this.page.locator('[id="confirmPassword"]')
//         this.displayname = this.page.locator('id="displayName"')
//     }

//     async gotoUrl(){
//         await this.page.goto("https://dev.portal.2k.com/")
//     }

//     async enterCountryBirthday(account: TwoKAccount) {
//         await this.countryDropDown.selectOption(account.country);
//         await this.dobMonthDropDown.selectOption(account.month);
//         await this.dobYearDropDown.selectOption(account.year.toString());
//         // await this.continueButton.click();
//       }

//       async getContinueButton(){
//         await this.continueButton.click();
//       }

//       async getemail(email: string){
//         await this.email.fill(email)
//       }
    
//       async getConfirmEmail(email: string){
//         await this.confirmemail.fill(email)
//       }

//       async getPassword(password: string){
//         await this.password.fill(password)
//       }

//       async getConfirmpw(password:string){
//         await this.confirmPw.fill(password)
//       }

//       async getDisplayname(displayname:string){
//         await this.displayname
//       }
// }