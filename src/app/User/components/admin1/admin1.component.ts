import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    // console.log(username,password);
    // return false;
if (username == 'admin' && password == 'admin')
this.router.navigate(['adminpage/manageteacher']);
else {
  this.router.navigateByUrl('/user/home');
}
  }

}
