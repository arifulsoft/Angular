import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_Array';
  id:number=0;
  name:string="";
  email:string="";
  district:string = "";
  image:string = "";

  product_array = [
    {id:100,name:"Sumon",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/abcd.png"},
    {id:101,name:"Arif",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/abcd.png"},
    {id:102,name:"Rahat",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/abcd.png"},
    {id:103,name:"Aziz",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/abcd.png"},
    {id:104,name:"Johir",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/abcd.png"}
  ];
  // product:any= new Object();
  product:any={id:100,name:"Sumon",email:"syful.islam@gmail.com",district:"Cumilla",image:"assets/car.png"};
  m1(i:any){
    this.product=new Object();
    this.product.id=this.product_array[i].id;
    this.product.name=this.product_array[i].name;
    this.product.email=this.product_array[i].email;
    this.product.district=this.product_array[i].district;
    this.product.image=this.product_array[i].image;
  }
  show_data(){
    this.product={id:this.id,name:this.name,email:this.email,district:this.district,image:this.image}
    this.product_array.push(this.product);
   this.id=0;
   this.name="";
   this.email="";
   this.district="";
   this.image="";
  }
}