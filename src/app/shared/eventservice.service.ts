import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Event } from './event.model';

@Injectable()
export class EventService {
  selectedEvent: Event;
  events: Event[];
  readonly baseURL = 'http://localhost:4000/events';

  constructor(private http: HttpClient) { }

  postEvent(eve: Event) {
    return this.http.post(this.baseURL, eve);
  }

  getEventList() {
    return this.http.get(this.baseURL);
  }

  putEvent(eve: Event) {
    return this.http.put(this.baseURL + `/${eve._id}`, eve);
  }

  deleteEvent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

