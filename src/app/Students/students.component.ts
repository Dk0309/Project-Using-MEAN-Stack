import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']

})
export class StudentsComponent implements OnInit {

constructor(private route : Router, private userService: UserService){}

ngOnInit(){}

OnClick(){
  this.userService.deleteToken();
  this.route.navigate(['user/home']);
}

}


