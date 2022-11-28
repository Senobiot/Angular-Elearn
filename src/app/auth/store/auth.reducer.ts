import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import * as authActions from "./auth.actions";

export interface AuthState {
    isAuthorized: boolean;
    token: string;
    errorMessage: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    token: '',
    errorMessage: ''
}
export const authFeatureKey = createFeatureSelector<AuthState>('');

export const reducer = createReducer(
    initialState,
    on(
        authActions.requestLogin,
      (state,  { name, password }) => ({ ...state, name, password })
    ),
    on(
        authActions.requestLoginSuccess,
      (state, { loginSuccess }) => ({ ...state, loginSuccess })
    ),
    on(
        authActions.requestLoginFail,
      (state, { loginSuccess }) => ({ ...state, loginSuccess })
    ),
    on(
        authActions.requestRegister,
      (state ) => ({ ...state })
    ),
    on(
        authActions.requestRegisterSuccess,
      (state, { registerSuccess }) => ({ ...state, registerSuccess })
    ),
    on(
        authActions.requestRegisterFail,
      (state, { registerSuccess }) => ({ ...state, registerSuccess })
    ),
    on(
        authActions.requestLogout,
      (state) => ({ ...state })
    ),
    on(
        authActions.requestRegisterFail,
      (state, { registerSuccess }) => ({ ...state, registerSuccess })
    ),
    on(
        authActions.requestLogoutSuccess,
      (state, { logoutSuccess }) => ({ ...state, logoutSuccess })
    ),
  );
  
  export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);