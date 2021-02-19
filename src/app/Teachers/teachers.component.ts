import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../shared/teacher.service';

@Component({
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']

})
export class TeachersComponent implements OnInit {

constructor(private route : Router,private teacherService: TeacherService){}

ngOnInit(){}
OnClick(){
  this.teacherService.deleteToken();
  this.route.navigate(['user/home']);
}

}


