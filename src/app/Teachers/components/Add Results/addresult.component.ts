import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ResultService } from '../../../shared/result.service';
import { Result } from '../../../shared/result.model';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

declare var M: any;

@Component({
  selector: 'addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css'],
  providers: [ResultService]
})
export class AddResultComponent implements OnInit {

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshResultList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.resultService.selectedResult = {
      _id: "",
      eventname: "",
      position: "",
      holdername:"",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.resultService.postResult(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshResultList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.resultService.putResult(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshResultList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshResultList() {
    this.resultService.getResultList().subscribe((res) => {
      this.resultService.results = res as Result[];
    });
  }

  onEdit(rus: Result) {
    this.resultService.selectedResult = rus;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.resultService.deleteResult(_id).subscribe((res) => {
        this.refreshResultList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
