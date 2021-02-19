import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GatewayRoutingModule } from './gateway.routing';
import { GatewayComponent } from './gateway.component';
@NgModule({
    declarations: [
         GatewayComponent,
         
        ],
    imports: [
      BrowserModule,
      GatewayRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
    providers: [],
  })
  export class GatewayModule { }
  