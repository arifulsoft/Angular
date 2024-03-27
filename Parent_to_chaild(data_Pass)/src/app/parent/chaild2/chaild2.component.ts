import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaild2',
  templateUrl: './chaild2.component.html',
  styleUrls: ['./chaild2.component.css']
})
export class Chaild2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() myid:any=0;
}
