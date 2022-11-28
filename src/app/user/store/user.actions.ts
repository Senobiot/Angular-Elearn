import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction(
    'REQUEST_USER',
    props<{ name: string }>()
);

export const requestCurrentUserSuccess = createAction(
    'REQUEST_USER_SUCCESS',
    props<{ requestCurrentUser: true }>()
);

export const requestCurrentUserFail = createAction(
    'REQUEST_USER_FAI',
    props<{ requestCurrentUser: false }>()
);
