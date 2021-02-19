import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TeachersComponent } from './teachers.component';
import { TeachersRouting } from './teachers.routing';
import { EventsComponent } from './components/events/events.component';
import { RegisteredComponent } from './components/registeredstudents/registeredstudents.component';
import { AddResultComponent } from './components/Add Results/addresult.component';
import { TeacherService } from '../shared/teacher.service';
import { TeacherProfileComponent } from './components/teacher-profile/teacher-profile.component';
import { AuthGuard } from '../auth/auth.guards';

@NgModule({
  declarations: [
    TeachersComponent,
    EventsComponent,
    RegisteredComponent,
    AddResultComponent,
    TeacherProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,TeachersRouting
  ],
  providers: [TeacherService,AuthGuard],

})
export class TeachersModule { }
