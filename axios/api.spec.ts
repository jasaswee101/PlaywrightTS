import { test, expect } from "@playwright/test";
import { Given, Then, When } from "@cucumber/cucumber";
const axios= require('axios')
import { api_key, Accesstoken } from '../axios/constant.spec';

interface TrelloBoardResponse {
  id: string;
  name: string;
}


Then('I have created a new trello board',async()=>{

    axios.post("https://api.trello.com/1/boards/&", {
        params: {
            name:"NewBoard",
            key:api_key,
            token:Accesstoken,
          }
    }).then((response: { data: { id: any,name: any }; })=>{
        const id= response.data.id
        const name=response.data.name
        console.log(`Board Created: ID=${id}, Name=${name}`);
    })
    .catch((error: any)=>{
        console.log('Error:',error)
    })
    
})