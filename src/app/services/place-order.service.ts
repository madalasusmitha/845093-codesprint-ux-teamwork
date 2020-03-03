import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Order } from '../Models/order';
import {Observable} from 'rxjs';
import {Contact} from '../Models/contact';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json'
}
)}
@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  url:string='http://localhost:3000/place-order';

  constructor(private service:HttpClient) { }
  public AddOrder(order:Order):Observable<any>{
    return this.service.post<any>(this.url,JSON.stringify(order),Requestheaders);
  }
  public GetOrders():Observable<any>{
    return this.service.get<any>(this.url,Requestheaders);
  }

}