import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/shared/result.service';
import { Result } from 'src/app/shared/result.model';

@Component({
  selector: 'viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.css'],
  providers:[ResultService]
})
export class ViewResult1Component implements OnInit {

  constructor(private resultService: ResultService,private _router:Router) { }

  ngOnInit() {
    // this.resetForm();
    this.refreshResultList();
  }
  refreshResultList() {
    this.resultService.getResultList().subscribe((res) => {
      this.resultService.results = res as Result[];
    });
   }



}
