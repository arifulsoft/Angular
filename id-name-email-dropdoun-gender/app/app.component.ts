import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  x: number = 0;
  y: string = "";
  z:string="";
  round:any=0;
  gender:any="";
  productsArray: any = [
    { id: 101, Name: "sumon", email: "abc1@gmail.com", round: 55, gender: "male" },
  { id: 102, Name: "arif", email: "abc1@gmail.com", round: 55, gender: "male" },
    { id: 103, Name: "aziz", email: "abc1@gmail.com", round: 55, gender: "male" },
    { id: 104, Name: "johir", email: "abc1@gmail.com", round: 55, gender: "male" },
    { id: 105, Name: "Shamim", email: "abc1@gmail.com", round: 55, gender: "male" },
    { id: 106, Name: "Topu", email: "abc1@gmail.com", round: 55, gender: "male" },
  ];
  product: any = {}



  m2() {

    this.product = { id: this.x, Name: this.y,email:this.z,round:this.round,gender:this.gender };
    this.productsArray.push(this.product);
  }
}
