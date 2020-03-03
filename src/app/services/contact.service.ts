import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Contact } from '../Models/contact';
import {Observable} from 'rxjs';
import {Order} from '../Models/order';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json'
})}


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url:string='http://localhost:3000/contact';
  constructor(private client:HttpClient) { }
  public AddContact(contact:Contact):Observable<any>
  {
    return this.client.post<any>(this.url,JSON.stringify(contact),Requestheaders);
  }
  public GetContact(contact:Contact):Observable<any>
  {
    return this.client.get<any>(this.url);
  }

}