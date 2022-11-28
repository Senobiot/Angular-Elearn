import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

const getAuthStatee = createFeatureSelector<AuthState>('authState');

export const isUserAuthorized = createSelector(
    getAuthStatee,
    (state: AuthState) => state.isAuthorized
);

export const getToken = createSelector(
    getAuthStatee,
    (state: AuthState) => state.token
);

export const getSpecificErrorMessage = createSelector(
    getAuthStatee,
    (state: AuthState) => state.errorMessage
);
