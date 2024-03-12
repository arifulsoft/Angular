import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumon';
  x:string="";
  y:string=" ";
  
  m2(){
    
 this.y=this.x;
}
}
