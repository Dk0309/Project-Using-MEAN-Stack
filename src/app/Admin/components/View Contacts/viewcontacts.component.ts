import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/eventservice.service';
import { Event } from '../../../shared/event.model';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/contact.service';
import { Contact } from 'src/app/shared/contact.model';
// import { } from 'src/app/shared/gatewayservice.service';
// import { Checkout } from 'src/app/shared/gateway.model';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css'],
  providers:[ContactService]
})
export class ViewContactComponent implements OnInit {

  constructor(private contactService: ContactService ) { }

  ngOnInit() {
    // this.resetForm();
    this.refreshContactList();
  }
  refreshContactList() {
    this.contactService.getContactList().subscribe((res) => {
      this.contactService.contacts = res as Contact[];
    });
}



}
