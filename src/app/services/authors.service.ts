import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  endpoint: string = 'http://localhost:4000';
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private authors$$ = new BehaviorSubject<string>('');
  public isLoading$ = this.isLoading$$.asObservable();
  public authors$ = this.authors$$.asObservable();

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const api = `${this.endpoint}/authors/all`;
  
    return this.http.get(api);
  }

  addAuthor(name: string): Observable<any> {
    const api = `${this.endpoint}/authors/add`;
  
    return this.http.post(api, { name });
  }
}
