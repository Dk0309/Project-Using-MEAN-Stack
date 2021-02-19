import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  selectedContact: Contact;
contacts: Contact[];
  readonly baseURL = 'http://localhost:4000/contacts';

  constructor(private http: HttpClient) { }

  postContact(cont: Contact) {
    return this.http.post(this.baseURL,cont);
  }

  getContactList() {
    return this.http.get(this.baseURL);
  }

  putContact(cont: Contact) {
    return this.http.put(this.baseURL + `/${cont._id}`, cont);
  }

  deleteContact(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

