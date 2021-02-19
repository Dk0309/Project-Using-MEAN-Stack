import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

import { StudentsComponent} from './students.component';
import { EventsComponent } from "./components/events/events.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { ViewResultComponent } from "../students/components/View Results/viewresults.component";
import { AuthGuard } from '../auth/auth.guard';
import { UserProfileComponent } from "./components/user-profile/user.component";
const routes : Routes = [
    {
        path : 'students' , component : StudentsComponent,canActivate:[AuthGuard] ,
        children:[
            {
                 path : '' , component : EventsComponent
            },
            {
                path : 'events' , component : EventsComponent

            },
            {
                path : 'contact' , component : ContactFormComponent

            },
            {
                path : 'userProfile' , component : UserProfileComponent

            },
            {
                path : 'results' , component : ViewResultComponent 

            }

        ]
        
        
    
    }
]

export const StudentsRouting = RouterModule.forRoot(routes);