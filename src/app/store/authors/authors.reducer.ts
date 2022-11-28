import { Action, createFeatureSelector, createReducer, on } from "@ngrx/store";
import * as userActions from "./user.actions";

export interface AuthorsState {
    authors: string[];
    addedAuthors: string[];
}

const initialState: AuthorsState = {
    authors: [],
    addedAuthors: []
}

export const authorsFeatureKey = createFeatureSelector<AuthorsState>('authors');

const reducer = createReducer(
    initialState,
    on(
        userActions.requestCurrentUser,
      (state, { name }) => ({ ...state, name })
    ),

  );

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);
