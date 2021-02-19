import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../shared/teacher.service';
import { NgForm } from '@angular/forms';
import { Teacher } from '../../../shared/teacher.model';
import {Router} from '@angular/router';
declare var M:any ;
@Component({
  selector: 'app-manageteacher',
  templateUrl: './manageteacher.component.html',
  styleUrls: ['./manageteacher.component.css'],
  providers:[TeacherService]
})
export class Manageteacher implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(private teacherService:TeacherService, private router : Router) { }

  ngOnInit() {
     this.resetForm();
     this.refreshTeacherList();
    
  }
  resetForm(form?: NgForm){
    if(form)
    form.reset();
this.teacherService.selectedTeacher = {
  _id :"",
  name:"",
  email:"",
  contact:"",
  password:""
} 
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.teacherService.postTeacher(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshTeacherList();
    M.toast({ html : 'Saved successfully', classes:'rounded'});
    }); 
  }
  else {
    this.teacherService.putTeacher(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshTeacherList();
M.toast({html : 'Updated Successfully',classes:'rounded'});
    });
  }
}
  refreshTeacherList(){
    this.teacherService.getTeacherList().subscribe((res) => {
      this.teacherService.teachers = res as Teacher[];
    });
  }
onEdit(teach:Teacher){
  this.teacherService.selectedTeacher=teach;
}
onDelete(_id:string , form:NgForm){
  if(confirm('Are you sure to delete the record ?') == true){
    this.teacherService.deleteTeacher(_id).subscribe((res) =>{
      this.refreshTeacherList();
      this.resetForm(form);
      M.toast({html:'Deleted Successfully',classes:'rounded'});
    });
  }
}
}
