import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/contact.service';
import { Contact } from '../../../shared/contact.model';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]

})
export class ContactComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshContactList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.contactService.selectedContact = {
      _id: "",
      name: "",
      email: "",
      phone: null,
      message: "",

        }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.contactService.postContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        // M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.contactService.putContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        // M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshContactList() {
    this.contactService.getContactList().subscribe((res) => {
      this.contactService.contacts = res as Contact[];
    });
  }

  onEdit(cont: Contact) {
    this.contactService.selectedContact = cont;
  }

}
