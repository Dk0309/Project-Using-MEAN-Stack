import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventService } from '../../../shared/eventservice.service';
import { Event } from '../../../shared/event.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

declare var M: any;

@Component({
  selector: 'manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.css'],
  providers: [EventService]
})
export class ManageEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEventList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.eventService.selectedEvent = {
      _id: "",
      name: "",
      date: null,
      type: "",
      teacher:"",
      fees: null
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.eventService.postEvent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.eventService.putEvent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEventList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.events = res as Event[];
    });
  }

  onEdit(eve: Event) {
    this.eventService.selectedEvent = eve;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.eventService.deleteEvent(_id).subscribe((res) => {
        this.refreshEventList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
