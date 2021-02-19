import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';
import { TeachersComponent } from "./teachers.component";
import { EventsComponent } from "./components/events/events.component";
import { RegisteredComponent } from "./components/registeredstudents/registeredstudents.component";
import { AddResultComponent } from "./components/Add Results/addresult.component";
import { TeacherProfileComponent } from "./components/teacher-profile/teacher-profile.component";
import { AuthGuard } from "../auth/auth.guards";
// import { AuthGuard } from "../auth.guard";

const routes : Routes = [
    {
        path : 'teachers' , component : TeachersComponent, canActivate:[AuthGuard],
        children:[
            {
                 path : '' , component : EventsComponent
            },
            {
                path : 'events' ,  component : EventsComponent

            },
           
            {
                path : 'teacherprofile' , component : TeacherProfileComponent

            },
            {
                path : 'registered' , component : RegisteredComponent

            },
            {
                path : 'addresults' , component : AddResultComponent

            },
           
            

        ]
        
    }
]

export const TeachersRouting = RouterModule.forRoot(routes);