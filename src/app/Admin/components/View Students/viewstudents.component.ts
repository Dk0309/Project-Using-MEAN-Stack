import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/eventservice.service';
import { Event } from '../../../shared/event.model';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/shared/gatewayservice.service';
import { Checkout } from 'src/app/shared/gateway.model';

@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css'],
  providers:[CheckoutService]
})
export class ViewStudentComponent implements OnInit {

  constructor(private checkoutService: CheckoutService,private _router:Router) { }

  ngOnInit() {
    // this.resetForm();
    this.refreshCheckoutList();
  }
  refreshCheckoutList() {
    this.checkoutService.getCheckoutList().subscribe((res) => {
      this.checkoutService.checkouts = res as Checkout[];
    });
  }



}
