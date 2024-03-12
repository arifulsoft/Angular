import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raj';
  x:number=0;
  y:number=0;
  z:number=0;
 
  sum:number=0;
  m1(){
    this.sum =this.x+this.y+this.z
  }
}
