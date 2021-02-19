import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../shared/gatewayservice.service';
import { NgForm } from '@angular/forms';
import { Checkout } from '../shared/gateway.model';
import { Router } from '@angular/router';



// declare var M: any;

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css'],
  providers:[CheckoutService]
})


export class GatewayComponent implements OnInit {

  constructor(private checkoutService: CheckoutService , private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshCheckoutList();

  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.checkoutService.selectedCheckout = {
      _id: "",
      name: "",
      event: "",
        }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.checkoutService.postCheckout(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCheckoutList();
        this.router.navigateByUrl('/students/events');
        // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.checkoutService.putCheckout(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshCheckoutList();
        // M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshCheckoutList() {
    this.checkoutService.getCheckoutList().subscribe((res) => {
      this.checkoutService.checkouts = res as Checkout[];
    });
  }

  onEdit(check: Checkout) {
    this.checkoutService.selectedCheckout = check;
  }

      

}
