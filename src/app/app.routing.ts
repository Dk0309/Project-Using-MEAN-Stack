import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

import { UserComponent} from './User/user.component';

const routes : Routes = [
    {
        path : '' , redirectTo : '/user/home' , pathMatch : 'full'
    }
]

export const routing = RouterModule.forRoot(routes);