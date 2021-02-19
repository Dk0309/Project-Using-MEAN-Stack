import { Input , Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { FormGroup, FormControl, Validators , FormBuilder } from '@angular/forms';
@Component({
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css']
})
export class RegisterComponent implements OnInit{

    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    showSuccessMessage: boolean;
    serverErrorMessage: string;
  constructor( private route: Router,private userService: UserService ) { }
 


ngOnInit() {}
    
   

onSubmit(form: NgForm){
    
     this.userService.postUser(form.value).subscribe(

        res => {
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false,4000);
            this.resetForm(form);
            //this.route.navigate(['user/student']);
        },
        err => {
            if(err.status == 422){
                this.serverErrorMessage = err.error.join('<br/>');
            }
            else
            this.serverErrorMessage = 'Something went wrong.Please contact admin.';
        }
     );
}

resetForm(form: NgForm){
    this.userService.selectedUser =  {
        name: "",
        email: "",
        password: "",
        mobilenumber: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        address: ""
    };
    form.resetForm();
    this.serverErrorMessage = '';
}

}