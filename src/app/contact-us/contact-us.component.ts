  import { Component, OnInit } from '@angular/core';
  import{FormGroup,FormBuilder,Validators} from '@angular/forms';
  import {Contact } from '../Models/contact';
  import { Order } from '../Models/order';
  import { PlaceOrderService } from '../Services/place-order.service';
  import { ContactService } from '../Services/contact.service';
  
  @Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
  })
  export class ContactUsComponent implements OnInit {
    submitted:boolean=false;
    contactForm:FormGroup;
    contact:Contact;
  
    constructor(private builder:FormBuilder,private service:ContactService) { }
    ngOnInit() {
  
      this.contactForm = this.builder.group({
        fname: ['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],  
        lname:['',[Validators.required,Validators.pattern('^[A-Za-z]{1,15}$')]],
        email: ['',[Validators.required,Validators.email]],
        comment: ['',[Validators.required]]
  
      });
    }
    
   get f()
    {
     return this.contactForm.controls;
    }
    onSubmit()
    {
      this.submitted=true;
  //    display from values on sucess
      if(this.contactForm.valid)
      {
        this.Add();
        console.log(JSON.stringify(this.contactForm.value));
      }
    }
      Add()
      {
        this.contact=new Contact();
         this.contact.fname=this.contactForm.value["FName"];
         this.contact.lname=this.contactForm.value["LName"];
         this.contact.email=this.contactForm.value["email"];
         this.contact.comment=this.contactForm.value["comment"];
        console.log(this.contact);
        this.service.AddContact(this.contact).subscribe(res=>{
          console.log("record added");
        },err=>{
          console.log(err)
        })
   }
  }


