import { Component } from '@angular/core';
import { mergeScan } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factorial';

  x: number = 1;
  p = 1;
 

  m1() {

    if (this.x <= 1) {
      this.p = 1;

    } else {
      for (var i = 2; i <= this.x; i++) {
        this.p = this.p * i;

      }



    }
  }
}