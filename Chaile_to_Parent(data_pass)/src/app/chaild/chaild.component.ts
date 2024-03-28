import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chaild',
  templateUrl: './chaild.component.html',
  styleUrls: ['./chaild.component.css']
})
export class ChaildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output () myevent:any=new EventEmitter();
  m1(x:any){
this.myevent.emit(x);
  }

}
