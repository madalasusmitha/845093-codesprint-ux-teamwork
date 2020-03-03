import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderService } from './services/place-order.service';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewOrderComponent,
    PlaceOrderComponent,
    ContactUsComponent,
    HomeComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PlaceOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
