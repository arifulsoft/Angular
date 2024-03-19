import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumon';
  // x: string = "";
  // a: any[] = [];
  x: number = 0;
  y: string = "";

  product: any = {}
  p: any = [];

  constructor(private myservice: StudentService) {
    this.p = this.myservice.getData().slice();

  }


 

  Add() {


    this.product = { id: this.x, Name: this.y };
    this.myservice.getData().push(this.product);
    this.x = 0;
    this.y = "";
    alert("Data added");
  }

  Show(){
  // this.p=[];
    this.p = this.myservice.getData().slice();
  }
}
