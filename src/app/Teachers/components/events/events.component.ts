import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../shared/eventservice.service'
import { Event } from '../../../shared/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[EventService]
})
export class EventsComponent implements OnInit {

  constructor(private eventService : EventService , private router : Router) { }
  ngOnInit() {
    // this.resetForm();
    this.refreshEventList();
  }
  Register():void{
    this.router.navigate(['gateway']);
  }
  refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.events = res as Event[];
    });
  }


}