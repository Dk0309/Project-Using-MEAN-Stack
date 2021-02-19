import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

import { UserComponent} from './user.component';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/About/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { EventComponent } from "./components/event/event.component";
import { RegisterComponent } from "./components/register/register.component";
import { TeacherComponent } from "./components/teacher/teacher.component";
import { StudentComponent } from "./components/student/student.component";
import { Admin1Component } from "./components/admin1/admin1.component";
import { StudentsComponent } from "../Students/students.component";

const routes : Routes = [
    {
         path : 'user' , component : UserComponent ,
         children:[
            {
            path : '' , component : HomeComponent
        },
         {
          path : 'home' , component : HomeComponent
       }, 
        {
            path : 'about' , component : AboutComponent
        },
        {
            path : 'contact' , component : ContactComponent
        },
        {
            path : 'events' , component : EventComponent
        },
        {
            path : 'register' , component : RegisterComponent
        },
        {
            path : 'teacher' , component : TeacherComponent
        },
        {
            path : 'student' , component : StudentComponent
        },
        {
            path : 'admin' , component : Admin1Component
        },
        
        
     ]
     },
]

export const UserRouting = RouterModule.forRoot(routes);