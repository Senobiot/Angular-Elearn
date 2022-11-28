import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction(
    'REQUEST_LOGIN',
    props<{ name: string, password: string }>()
);

export const requestLoginSuccess = createAction(
    'REQUEST_LOGIN_SUCCESS',
    props<{ loginSuccess: true }>()
);

export const requestLoginFail = createAction(
    'REQUEST_LOGIN_FAIL',
    props<{ loginSuccess: false }>()
);

export const requestCurrentUserSuccess = createAction(
    'REQUEST_USER_SUCCESS',
    props<{ currentUserSuccess: true }>()
);

export const requestRegister = createAction(
    'REQUEST_REGISTER',
);

export const requestRegisterSuccess = createAction(
    'REQUEST_REGISTER_SUCCESS',
    props<{ registerSuccess: true }>()
);

export const requestRegisterFail = createAction(
    'REQUEST_REGISTER_FAIL',
    props<{ registerSuccess: false }>()
);

export const requestLogout = createAction(
    'REQUEST_LOGOUT',
);

export const requestLogoutSuccess = createAction(
    'REQUEST_LOGOUT_SUCCESS',
    props<{ logoutSuccess: true }>()
);
