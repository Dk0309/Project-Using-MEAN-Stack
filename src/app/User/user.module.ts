import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/About/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserRouting } from './user.routing';
import { Admin1Component } from './components/admin1/admin1.component';
import { EventComponent } from './components/event/event.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AdminpageModule } from '../Admin/adminpage.module';
import { UserService } from '../shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeacherService } from '../shared/teacher.service';
import { AuthGuard } from '../auth/auth.guard';
import {  AuthIntercepter } from '../auth/auth.interceptor';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    RegisterComponent,
    StudentComponent,
    TeacherComponent,
    Admin1Component,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,UserRouting,AdminpageModule,HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthIntercepter,
    multi: true
  }, UserService,TeacherService,AuthGuard],
})
export class UserModule { }
