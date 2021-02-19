import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TeacherService } from '../../../shared/teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']

})
export class TeacherProfileComponent implements OnInit {
  teacherDetails;
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit() {
    this.teacherService.getTeacherProfile().subscribe(
      res => {
        this.teacherDetails = res['teacher'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  

}