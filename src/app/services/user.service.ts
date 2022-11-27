import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  
  getUser() {
    const api = `${this.endpoint}//users/me`;

    return this.http.get(api);
  }
}
