import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable({
   providedIn: 'root'
 })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private sessionStorageService: SessionStorageService) {} 
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
    const token = this.sessionStorageService.getToken();

   if (token) {
     request = request.clone({
        setHeaders: {Authorization: `Authorization token ${token}`}
     });
  }

  return next.handle(request).pipe(
  	catchError((error) => {
   	 if (error instanceof HttpErrorResponse) {
       	if (error.status === 403) {
            window.location.href = '';
     	}
 	 }
  	return throwError(error);
	})
   )
  }
}
