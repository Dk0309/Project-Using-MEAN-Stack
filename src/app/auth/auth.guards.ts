import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";
import { TeacherService } from '../shared/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private teacherService: TeacherService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.teacherService.isLoggedIn()) {
        this.router.navigateByUrl('/user/teacher');
        this.teacherService.deleteToken();
        return false;
      }
    return true;
  }
}