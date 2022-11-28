import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import * as coursesActions from './courses.actions';

@Injectable()
export class UserEffects {

    getAll$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestAllCourses),
    mergeMap(() => this.coursesService.getAll()
      .pipe(
        map(courses => (coursesActions.requestAllCoursesSuccess({ courses }))),
        catchError(async () => coursesActions.requestAllCoursesFail({fail: true}))
      ))
    )
  );

  filteredCourses$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestFilteredCourses),
    mergeMap(() => this.coursesService.getAll()
      .pipe(
        map(courses => (coursesActions.requestFilteredCoursesSuccess({ courses }))),
      ))
    )
  );

  getSpecificCourse$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestSingleCourse),
    mergeMap(course => this.coursesService.getCourse(course.id)
      .pipe(
        map(courses => (coursesActions.requestSingleCourseSuccess({ courses }))),
        catchError(async () => coursesActions.requestSingleCourseFail ({fail: true}))
      ))
    )
  );

  deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestDeleteCourse),
    mergeMap(course => this.coursesService.deleteCourse(course.id)
      .pipe(
        map(courses => (coursesActions.requestAllCourses({ courses }))),
        catchError(async () => coursesActions.requestDeleteCourseFail({fail: true}))
      ))
    )
  );

  editCourse$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestSingleCourse),
    mergeMap( course => this.coursesService.editCourse(course.id, course.data)
      .pipe(
        map(courses => (coursesActions.requestSingleCourseSuccess({ courses }))),
        catchError(async () => coursesActions.requestEditCourseFail({fail: true}))
      ))
    )
  );

  createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestCreateCourse),
    mergeMap( course => this.coursesService.createCourse(course.data)
      .pipe(
        map(courses => (coursesActions.requestCreateCourseSuccess({ courses }))),
        catchError(async () => coursesActions.requestCreateCourseFail({fail: true}))
      ))
    )
  );

  redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
    ofType(coursesActions.requestCreateCourseSuccess 
        || coursesActions.requestEditCourseSuccess
        || coursesActions.requestSingleCourseFail),
      ),
      { dispatch: false }
    )

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}
}
