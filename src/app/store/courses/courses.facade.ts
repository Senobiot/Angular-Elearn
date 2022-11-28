import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as coursesActions from "./courses.actions";
import { CoursesState } from "./courses.reducer";
import * as coursesSelectors from "./courses.selectors";


@Injectable()
export class CoursesStateFacade {
    isAllCoursesLoading$ = this.store.pipe(select(coursesSelectors.isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(coursesSelectors.isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(coursesSelectors.isSearchingStateSelector));
    courses$ = this.store.pipe(select(coursesSelectors.getAllCourses));
    allCourses$ = this.store.pipe(select(coursesSelectors.getCourses));
    course$ = this.store.pipe(select(coursesSelectors.getCourse));
    errorMessage$ = this.store.pipe(select(coursesSelectors.getErrorMessage));


  constructor(private store: Store<CoursesState>) {}

  getAllCourses(): void {
    this.store.dispatch(new coursesActions.requestAllCourses());
  }

  getSingleCourse(): void {
    this.store.dispatch(new coursesActions.requestSingleCourse());
  }

  getFilteredCourses(): void {
    this.store.dispatch(new coursesActions.requestFilteredCourses());
  }

  editCourse(): void {
    this.store.dispatch(new coursesActions.requestEditCourse());
  }

  createCourse(): void {
    this.store.dispatch(new coursesActions.requestCreateCourse());
  }

  deleteCourse(): void {
    this.store.dispatch(new coursesActions.requestDeleteCourse());
  }
}
