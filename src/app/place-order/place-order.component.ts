import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, MaxLengthValidator} from '@angular/forms';
import { Order } from '../Models/order';
import { Router } from '@angular/router';
import { PlaceOrderService } from '../services/place-order.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
order:Order;
submitted=false;
list:Order[]=[];
placeorderForm:FormGroup;
  constructor(private frombuilder:FormBuilder,private route:Router,private service:PlaceOrderService) { }

  ngOnInit() {
    this.placeorderForm=this.frombuilder.group({
      amntinr:['',[Validators.required,Validators.pattern("^[0-9]{1,}$")]],
      amntpaisa:['',[Validators.required,Validators.pattern("^[0-9]{1,100}$")]],
      recipientfname:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      recipientlname:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      streetaddress:['',[Validators.required,Validators.pattern("^[A-Za-z][0-9]{0,}$")]],
      city:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      state:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      country:['',Validators.required],
      buyerfname:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      buyerlname:['',[Validators.required,Validators.pattern("^[A-Za-z]{0,}$")]],
      phonenumber:['',Validators.required],
      emailid:['',Validators.required]
    });

  }
  get f(){return this.placeorderForm.controls;}
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.placeorderForm.valid)
    {
      this.addOrder();
      console.log(JSON.stringify(this.placeorderForm.value));
    }
  }
Reset()
  {
    this.submitted = false;
    this.placeorderForm.reset();
  }
  addOrder(){
    alert("hi");
     this.order=new Order();
      this.order.amntinr=this.placeorderForm.value["amntinr"];
      this.order.amntpaisa=this.placeorderForm.value["amntpaisa"];
      this.order.recipientfname=this.placeorderForm.value["recipientfname"];
      this.order.recipientlname=this.placeorderForm.value["recipientlname"];
      this.order.streetaddress=this.placeorderForm.value["streetaddress"];
      this.order.city=this.placeorderForm.value["city"];
      this.order.state=this.placeorderForm.value["state"];
      this.order.pincode=this.placeorderForm.value["pincode"];
      this.order.country=this.placeorderForm.value["country"];
      this.order.buyerfname=this.placeorderForm.value["buyerfname"];
      this.order.buyerlname=this.placeorderForm.value["buyerlname"];
      this.order.phonenumber=this.placeorderForm.value["phonenumber"];
      this.order.emailid=this.placeorderForm.value["emailid"];
      // this.list.push(this.order);
      this.service.AddOrder(this.order).subscribe(res=>{
        console.log(this.order);
        this.route.navigateByUrl('view-order');
      },err=>{
        console.log(err)
      })
  
      }
    }
    