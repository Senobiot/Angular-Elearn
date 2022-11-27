import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private isAuthorized$$ = new BehaviorSubject<boolean>(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService ) {}

  register(name: string, email: string, password: string): Observable<any> {
    const api = `${this.endpoint}/Auth/AuthController_register`;

    return this.http.post(api, { name, email, password });
  }

  login(name: string, password: string) {
    const api = `${this.endpoint}/Auth/AuthController_login`;
    return this.http
      .post(api, { name, password })
      .subscribe((response: any) => {
        this.sessionStorageService.setToken(response.result);
        if (response.successful) {
          this.isAuthorized$$.next(true);
          window.location.href = '/courses';
        }
      });
  }

  logout() {
    const api = `${this.endpoint}/Auth/AuthController_logout`;

    return this.http.delete(api).subscribe(() => {
      this.sessionStorageService.deleteToken();
      this.isAuthorized$$.next(false);
      window.location.href = '/login';
    });;
  }

  getToken() {
    return  this.sessionStorageService.getToken();
  }
}
