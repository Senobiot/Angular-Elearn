import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AddRequest {
  title: string;
  description: string,
  duration: number;
  authors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  endpoint: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const api = `${this.endpoint}/courses/all`;

    return this.http.get(api);
  }

  createCourse(data: AddRequest): Observable<any> {
    const api = `${this.endpoint}/courses/add`;

    return this.http.post(api, { data });
  }

  editCourse(id: string, data: AddRequest): Observable<any> {
    const api = `${this.endpoint}/courses/${id}`;

    return this.http.put(api, { data });
  }
  
  getCourse(id: string): Observable<any> {
    const api = `${this.endpoint}/courses/${id}`;

    return this.http.get(api);
  }

  deleteCourse(id: string): Observable<any> {
    const api = `${this.endpoint}/courses/${id}`;

    return this.http.delete(api);
  }
}
