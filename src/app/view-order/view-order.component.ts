import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Order } from '../Models/order';
import { PlaceOrderService } from '../services/place-order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  placeorderForm:FormGroup;
  submitted=false;
  list:Order[];
order:Order;

  constructor(private service:PlaceOrderService,private builder:FormBuilder) { 
    this.service.GetOrders().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit() {
  }

}