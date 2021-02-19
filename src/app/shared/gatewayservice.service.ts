import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Checkout } from './gateway.model';

@Injectable()
export class CheckoutService {
  selectedCheckout: Checkout;
  checkouts: Checkout[];
  readonly baseURL = 'http://localhost:4000/checkouts';

  constructor(private http: HttpClient) { }

  postCheckout(check: Checkout) {
    return this.http.post(this.baseURL, check);
  }

  getCheckoutList() {
    return this.http.get(this.baseURL);
  }

  putCheckout(check: Checkout) {
    return this.http.put(this.baseURL + `/${check._id}`, check);
  }

  

}

