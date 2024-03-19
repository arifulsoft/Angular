import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // constructor() { }

  productsArray:any=[
    { id:101,Name:"sumon"},
    { id:102,Name:"arif"},
    { id:103,Name:"aziz"},
    { id:104,Name:"johir"},
    { id:105,Name:"Shamim"},
    { id:106,Name:"Topu"},
    
  ];

  

  getData(){
    return this.productsArray;
  }


}
