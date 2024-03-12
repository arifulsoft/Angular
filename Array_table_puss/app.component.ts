import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumon';
  // x: string = "";
  // a: any[] = [];
x:number=0;
y:string="";
productsArray:any=[
  { id:101,Name:"sumon"},
  { id:102,Name:"arif"},
  { id:103,Name:"aziz"},
  { id:104,Name:"johir"},
  { id:105,Name:"Shamim"},
  { id:106,Name:"Topu"},
];
product:any={}



  m2() {

    this.product={ id:this.x,Name:this.y};
    this.productsArray.push(this.product);
  }
 }
