import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddRequest, CoursesService } from './courses.service';

interface Store {
  courses?: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<object>({});
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();
  store: Store = {};

  constructor(private requestService: CoursesService) { }

  public searchCourse(id: string) {
    return this.store.courses?.find(el => el.id === id);
  }

  getAll() {
    this.isLoading$$.next(true);

    if (!this.store.courses) {
      
      this.requestService.getAll().subscribe((response: any) => {

        if (response.successful) {
          this.courses$$.next(response);
          this.store.courses = response.result;
        }
      })

      return this.store.courses;
    }
    this.isLoading$$.next(false);

    return this.store.courses;
  }

  createCourse(data: AddRequest) {
    this.isLoading$$.next(true);
  
    return this.requestService.createCourse(data).subscribe((response: any) => {
      if (response.successful) {
        this.courses$$.next(response);
        return this.store.courses?.push(this.courses$)
      }
      
      return this.isLoading$$.next(false);
    })
  }

  editCourse(id: string, data: AddRequest) {
    this.isLoading$$.next(true);
  
    return this.requestService.editCourse(id, data).subscribe((response: any) => {
      if (response.successful) {
        this.courses$$.next(response);
        const editableCourseIndex = this.searchCourse(id);

        if (this.store.courses && editableCourseIndex && this.store.courses[editableCourseIndex])
          this.store.courses[editableCourseIndex] = data;
      }
      
      return this.isLoading$$.next(false);
    })
  }
  
  getCourse(id: string) {
      const editableCourseIndex = this.searchCourse(id);

      if (this.store.courses && editableCourseIndex && this.store.courses[editableCourseIndex]) {
        return this.store.courses[editableCourseIndex];
      }
  }

  deleteCourse(id: string) {
    this.isLoading$$.next(true);
  
    return this.requestService.deleteCourse(id).subscribe((response: any) => {
      if (response.successful) {
        this.courses$$.next(response);
        const deletedCourseIndex = this.searchCourse(id);
  
        if (this.store.courses && deletedCourseIndex && this.store.courses[deletedCourseIndex])
          this.store.courses.splice(deletedCourseIndex, 1);
      }

      return this.isLoading$$.next(false);
    })
  }
}
