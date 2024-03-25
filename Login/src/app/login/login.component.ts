import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogingserviceService } from '../logingservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(private router: Router,private myservice:LogingserviceService) { }
  title = 'ppp';
  id: any;
  password: any;
  user: any;
  
  p:any[]=[];

  m1() {
    this.p=this.myservice.getData().slice();
    this.user = this.p.find(x => (x.id == this.id) && (x.password == this.password));
    if (this.user != null) {
      this.myservice.data=this.user;
      this.router.navigateByUrl("success");

    } else {

      this.router.navigateByUrl("fail");
    }

  }

}
