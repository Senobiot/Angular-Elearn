import { createAction, props } from "@ngrx/store";

export const requestAllCourses = createAction(
    'REQUEST_ALL_COURSES',
);

export const requestAllCoursesSuccess = createAction(
    'REQUEST_ALL_COURSES_SUCCES',
);

export const requestAllCoursesFail = createAction(
    'REQUEST_ALL_COURSES_FAIL',
);

export const requestSingleCourse = createAction(
    'REQUEST_SINGLE_COURSE',
    props<{ id: string }>()
);

export const requestSingleCourseSuccess = createAction(
    'REQUEST_SINGLE_COURSE_SUCCCESS',
);

export const requestSingleCourseFail = createAction(
    'REQUEST_SINGLE_COURSE_FAIL',
);

export const requestFilteredCourses = createAction(
    'REQUEST_FILTERED_COURSES',
);

export const requestFilteredCoursesSuccess = createAction(
    'REQUEST_FILTERED_COURSES_SUCCESS',
);

export const requestDeleteCourse = createAction(
    'REQUEST_DELETE_COURSE',
    props<{ id: string }>()
);

export const requestDeleteCourseFail = createAction(
    'REQUEST_DELETE_COURSE_FAIL',
);

export const requestEditCourse = createAction(
    'REQUEST_EDIT_COURSE',
);

export const requestEditCourseSuccess = createAction(
    'REQUEST_EDIT_COURSE_SUCCESS',
);

export const requestEditCourseFail = createAction(
    'REQUEST_EDIT_COURSE_FAIL',
);

export const requestCreateCourse = createAction(
    'REQUEST_CREATE_COURSE',
);

export const requestCreateCourseSuccess = createAction(
    'REQUEST_CREATE_COURSE_SUCCESS',
);

export const requestCreateCourseFail = createAction(
    'REQUEST_CREATE_COURSE_FAIL',
);
