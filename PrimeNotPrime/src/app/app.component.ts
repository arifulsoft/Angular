import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNotPrime';
  x:number=0;
  count=0;
  msg="";
 
  m1(){

  for(var i=1; i<=this.x; i++){
    if(this.x%i==0){
      this.count++
    }
  
  }
  if(this.count==2){
      this.msg=" this is prim number";
    } else{
      this.msg=" this is not prim number";
    }
  }
}
