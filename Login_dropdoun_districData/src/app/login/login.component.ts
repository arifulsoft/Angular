import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private myservice:ServiceService) { }

  ngOnInit(): void {
  }

  id: any;
  password: any;
  obj: any;
  p: any[] = [];

  m1() {
    this.p=this.myservice.getData().slice();
    this.obj = this.p.find(x => (x.id == this.id) && (x.password == this.password))
      if (this.obj != null) {
        this.myservice.data=this.obj;
       this.router.navigateByUrl("success");
      }else{
        this.router.navigateByUrl("fail");
      }
    }


    // dropdoun

    products=[
      {Division:"Mymensing",District1:"Mymensing",District2:"Jamalpur",District3:"Sherpur",District4:"Netrokuna",image:"assets/image/m1.jfif"},
      {Division:"Dhaka",District1:"GAzipur",District2:"Tangail",District3:"Munshiganj",District4:"Cumilla",image:"assets/image/d1.jfif"},
      {Division:"Rajsahi",District1:"Nator",District2:"Pabna",District3:"Magura",District4:"Chapai",image:"assets/image/r1.jfif"},
      {Division:"Chottogram",District1:"Feni",District2:"Coxbazar",District3:"Chanpur",District4:"Bandorban",image:"assets/image/c12.jfif"},
      {Division:"Rangpur",District1:"Kurigram",District2:"Nillfamari",District3:"Bogura",District4:"Gaibanda",image:"assets/image/ro1.jfif"},
    ];
    product:any={Division:"Mymensing",District2:"Jamalpur",District3:"Sherpur",price:7000,District4:"Netrokuna",image:"assets/image/m1.jpg"};
    m2(i:any){
      this.product=new Object();
      this.product.Division=this.products[i].Division;
      this.product.District2=this.products[i].District2;
      this.product.District3=this.products[i].District3;
      this.product.District4=this.products[i].District4;
      this.product.image=this.products[i].image;
    }
  }


