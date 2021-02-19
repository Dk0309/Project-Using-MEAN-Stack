import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpageComponent } from './adminpage.component';
import { Manageteacher } from './components/manageteacher/manageteacher.component';
import { ManageEventComponent } from './components/manageevent/manageevent.component';
import { ViewContactComponent } from './components/View Contacts/viewcontacts.component';
import { ViewResult1Component } from './components/View Results/viewresults.component';
import { ViewStudentComponent } from './components/View Students/viewstudents.component';
import { AuthGuard } from '../auth/auth.guard';
const routes: Routes = [
{path: 'adminpage' , component: AdminpageComponent, 
  children:[
    {path:'manageteacher',component:Manageteacher},
    {path:'manageevent',component:ManageEventComponent},
    {path:'viewresults',component:ViewResult1Component},
    {path:'viewstudents',component:ViewStudentComponent},
    {path:'viewcontacts',component:ViewContactComponent}

  
  

 ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
