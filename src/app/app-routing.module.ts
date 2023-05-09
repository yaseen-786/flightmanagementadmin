import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { AllcustomerComponent } from './allcustomer/allcustomer.component';
import { AllflightComponent } from './allflight/allflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { HomeComponent } from './home/home.component';
import { InsertformComponent } from './insertform/insertform.component';
import { LoginComponent } from './login/login.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { UpdateformComponent } from './updateform/updateform.component';

const routes: Routes = [
  {
    path:'homepage',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'homepage/insertform',
    component:InsertformComponent,
    pathMatch:'full'
  },{
    path:'homepage/showall',
    component:AllflightComponent
  },{
    path:'homepage/allcustomer',
    component:AllcustomerComponent
  },{
    path:'homepage/updateflight',
    component:UpdateflightComponent
  },{
    path:'homepage/updateform',
    component:UpdateformComponent
  },{
    path:'homepage/allbooking',
    component:AllbookingComponent
  }
  ,
  {
    path:'deleteflight',
    component:DeleteflightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
