import { Input ,Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm } from '@angular/forms';
import { TeacherService } from '../../../shared/teacher.service';
@Component({
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  

constructor( private router : Router , private teacherService : TeacherService) { }
model ={
  email :'',
  password:''
};
emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
serverErrorMessages: string;
ngOnInit() {
  // if(this.userService.isLoggedIn())
  // this.router.navigateByUrl('/students');
}

onSubmit(form : NgForm){
  this.teacherService.login(form.value).subscribe(
    res => {
      this.teacherService.setToken(res['token']);
      this.router.navigateByUrl('/teachers/events');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
}

}

    

    
  
  



  





