import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders } from '@angular/common/http';
import{Observable,Subject,throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Teacher } from './teacher.model';

@Injectable()
export class TeacherService {
  // selectedTeacher: Teacher = {
  //   _id:"",
  //   name:"",
  //   email:"",
  //   contact:"",
  //   password:""
  // };
  selectedTeacher:Teacher;
 teachers : Teacher[];
 readonly baseURL='http://localhost:3000/api/';

  constructor(private http : HttpClient) { }

  postTeacher(teach: Teacher){
    // return this.http.post(environment.apiBaseUrl+'/manageteacher',teach);
    return this.http.post(this.baseURL+'/manageteacher',teach);

  }
 
   login(authCredentials){
    //  return this.http.post(environment.apiBaseUrl+'/authenticate',authCredentials);
     return this.http.post(this.baseURL+'/authenticate',authCredentials);

    }
    getTeacherProfile() {
      return this.http.get(this.baseURL + '/teachers/teacherProfile');
    }
 
   setToken(token: string){
    localStorage.setItem('token', token);
   }
   getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload)
    return userPayload.exp > Date.now() / 1000;
    else
    return false;
  }

  // }

//   postTeacher(teach : Teacher){
// return this.http.post(this.baseURL , teach);
//   }

  getTeacherList(){
    // return this.http.get(environment.apiBaseUrl);
    return this.http.get(this.baseURL);

  }
  putTeacher(teacher: Teacher){
    // return this.http.put(environment.apiBaseUrl + `/${teacher._id}`,teacher);
    return this.http.put(this.baseURL + `/${teacher._id}`,teacher);

  }

  deleteTeacher(_id:string){
    // return this.http.delete(environment.apiBaseUrl + '${_id}');
    return this.http.delete(this.baseURL + '${_id}');

  }
}
