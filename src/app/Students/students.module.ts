import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentsComponent } from './students.component';
import { StudentsRouting } from './students.routing';
import { EventsComponent } from './components/events/events.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ViewResultComponent } from '../students/components/View Results/viewresults.component';
import { AuthGuard } from '../auth/auth.guard';
import { UserProfileComponent } from './components/user-profile/user.component';
import { UserService } from '../shared/user.service';


@NgModule({
  declarations: [
    StudentsComponent,
    EventsComponent,
    ContactFormComponent,
  ViewResultComponent,
  UserProfileComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,StudentsRouting
  ],
  providers: [AuthGuard,UserService],
})
export class StudentsModule { }
