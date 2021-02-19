import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdminpageComponent } from './adminpage.component';
import { AdminpageRoutingModule } from './adminpage.routing';
import { Manageteacher } from './components/manageteacher/manageteacher.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageEventComponent } from './components/manageevent/manageevent.component';
import { UserModule } from '../User/user.module';
import { ViewContactComponent } from './components/View Contacts/viewcontacts.component';
import { ViewResult1Component } from '../Admin/components/View Results/viewresults.component';
import { ViewStudentComponent } from './components/View Students/viewstudents.component';
import { AuthGuard } from '../auth/auth.guards';
@NgModule({
    declarations: [
         AdminpageComponent,
         Manageteacher,
         ManageEventComponent,
         ViewContactComponent,
         ViewResult1Component,
         ViewStudentComponent
        ],
    imports: [
      BrowserModule,
      AdminpageRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
    
    ],
    providers: [],
  })
  export class AdminpageModule { }
  