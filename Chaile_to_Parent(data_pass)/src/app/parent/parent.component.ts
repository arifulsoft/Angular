import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
id:any=500;
m1(z:any){
  this.id=z;
}
p:any;
p1(value:any){
  this.p=value;
}

}
