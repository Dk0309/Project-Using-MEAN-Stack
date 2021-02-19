import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../app/app.Component';
import { UserModule } from './User/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { TeachersModule } from './Teachers/teachers.module';
import { StudentsModule } from './Students/students.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AdminpageModule } from './Admin/adminpage.module';
import { GatewayModule } from './gateway/gateway.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,routing,HttpClientModule,
    UserModule,
    AdminpageModule,
    TeachersModule,
    StudentsModule,
    GatewayModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
