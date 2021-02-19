import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewayComponent } from './gateway.component';
const routes: Routes = [
  {path:'gateway',component:GatewayComponent,
 
  children:[
    // {path:'manageteacher',component:Manageteacher},
    // {path:'manageevent',component:ManageEventComponent}

  
  //  {path:'homeadmin',component:HomeAdminComponent},
  //    {path:'dashboard',component:DashboardComponent},

 ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GatewayRoutingModule { }
