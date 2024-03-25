import { Component, OnInit } from '@angular/core';
import { LogingserviceService } from '../logingservice.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
xyz:any;
  constructor(private myservice:LogingserviceService) {
    this.xyz=this.myservice.data;
   }

  ngOnInit(): void {
  }

}
