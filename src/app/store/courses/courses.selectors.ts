import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

const courses = createFeatureSelector<CoursesState>('courses');

export const isAllCoursesLoadingSelector = createSelector(
    courses,
    (state: CoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
    courses,
    (state: CoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
    courses,
    (state: CoursesState) => state.isSingleCourseLoading
);

export const getCourses = createSelector(
    courses,
    (state: CoursesState) => state.courses
);

export const getAllCourses = createSelector(
    courses,
    (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
    courses,
    (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
    courses,
    (state: CoursesState) => state.errorMessage
);



