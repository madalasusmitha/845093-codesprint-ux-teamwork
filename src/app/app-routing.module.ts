import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [ 
  {path:'home',component:HomeComponent,children:[
    {path:'home-content',component:HomeContentComponent},
  {path:'view-order',component:ViewOrderComponent},
  {path:'place-order',component:PlaceOrderComponent},
  {path:'contact-us',component:ContactUsComponent}]
},
{path:'',redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
