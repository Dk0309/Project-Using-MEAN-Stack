import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const togglemenu:any;

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  OnClick(){
    this.route.navigate(['user/home']);
  }


}
