import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/eventservice.service';
import { Event } from '../../../shared/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers:[EventService]
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService,private _router:Router) { }

  ngOnInit() {
    // this.resetForm();
    this.refreshEventList();
  }
  Register():void{
    this._router.navigate(['gateway']);
  }
  refreshEventList() {
    this.eventService.getEventList().subscribe((res) => {
      this.eventService.events = res as Event[];
    });
  }



}
