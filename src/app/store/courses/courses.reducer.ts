import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import * as coursesActions from "./courses.actions";

export interface CoursesState  {
    allCourses: string[];
    courses: string[];
    course: [];
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string

}

const initialState: CoursesState   = {
    allCourses: [],
    courses: [],
    course: [],
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ""
}

export const coursesFeatureKey  = createFeatureSelector<CoursesState>('courses');

export const reducer = createReducer(
    initialState,
    on(
        coursesActions.requestAllCourses,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestAllCoursesFail,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestAllCoursesSuccess,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestCreateCourse,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestCreateCourseFail,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestCreateCourseSuccess,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestDeleteCourse,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestDeleteCourseFail,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestEditCourse,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestEditCourseFail,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestEditCourseSuccess,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestFilteredCourses,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestFilteredCoursesSuccess,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestSingleCourse,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestSingleCourseFail,
      (state) => ({ ...state })
    ),
    on(
        coursesActions.requestSingleCourseSuccess,
      (state) => ({ ...state })
    ),
  );

  export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);