import { createAction, props } from "@ngrx/store";

export const requestAuthors = createAction(
    'REQUEST_AUTHORS',
);

export const requestAuthorsSuccess = createAction(
    'REQUEST_AUTHORS_SUCCESS',
);

export const requestAuthorsFail = createAction(
    'REQUEST_AUTHORS_FAIL',
);

export const requestAddAuthor = createAction(
    'REQUEST_ADD_AUTHOR',
    props<{ authorName: string }>()
);

export const requestAddAuthorSuccess = createAction(
    'REQUEST_ADD_AUTHOR_SUCCESS',
);

export const requestAddAuthorFail = createAction(
    'REQUEST_ADD_AUTHOR_FAIL',
);

export const resetAddedAuthor = createAction(
    'RESET_ADDED_AUTHOR',
);
