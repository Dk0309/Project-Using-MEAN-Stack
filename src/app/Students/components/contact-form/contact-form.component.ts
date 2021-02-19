// import { Component, OnInit } from '@angular/core';
// import { ContactService } from '../shared/contact.service';

// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../shared/contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../../../shared/contact.model';



// declare var M: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers:[ContactService]
})


export class ContactFormComponent implements OnInit {

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
