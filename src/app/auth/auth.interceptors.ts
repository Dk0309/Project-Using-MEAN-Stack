import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TeacherService } from '../shared/teacher.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor{


    constructor(private teacherService: TeacherService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
      
        if(req.headers.get('noauth'))
        return next.handle(req.clone());
        else {
            const clonereq = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + this.teacherService.getToken())  
            });
            return next.handle(clonereq).pipe(
                tap(
                    event => { },
                    err => {
                        if (err.error.auth == false) {
                            this.router.navigateByUrl('/user/teacher');
                        }
                    })
                );
                
            
            }
        }
    }
    

