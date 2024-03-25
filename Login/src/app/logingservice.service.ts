import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogingserviceService {

  constructor() { }
  users: any[] = [
    { id: '100',name:"Arif",email:"abc@gmail.com", password: "abc1" },
    { id: '101',name:"sumon",email:"abc@gmail.com", password: "abc2" },
    { id: '102',name:"Raj",email:"abc@gmail.com", password: "abc3" },
    { id: '103',name:"Rahim",email:"abc@gmail.com", password: "abc4" },
  ];
public getData(){
    return this.users;
  }
  public data:any;
}
