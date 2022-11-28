import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";

export interface UserState {
    isAdmin: boolean;
    name: string;
}

const initialState: UserState = {
    isAdmin: false,
    name: ''
}

export const userFeatureKey = createFeatureSelector<UserState>('');

export const reducer = createReducer(
    initialState,
    on(
        userActions.requestCurrentUser,
      (state, { name }) => ({ ...state, name })
    ),
    on(
        userActions.requestCurrentUserSuccess,
        (state, { requestCurrentUser }) => ({ ...state, requestCurrentUser })
    ),
    on(
        userActions.requestCurrentUserFail,
        (state, { requestCurrentUser }) => ({ ...state, requestCurrentUser })
    ),
  );

  export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);
  