import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Result } from './result.model';

@Injectable()
export class ResultService {
  selectedResult: Result;
  results: Result[];
  readonly baseURL = 'http://localhost:4000/results';

  constructor(private http: HttpClient) { }

  postResult(rus: Result) {
    return this.http.post(this.baseURL, rus);
  }

  getResultList() {
    return this.http.get(this.baseURL);
  }

  putResult(rus: Result) {
    return this.http.put(this.baseURL + `/${rus._id}`, rus);
  }

  deleteResult(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}

