import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './user.reducer';

const getUserName = createFeatureSelector<UserState>('name');
const getUserState = createFeatureSelector<UserState>('admin');

export const getName = createSelector(
    getUserName,
    (state: UserState) => state.name
);

export const isAdmin = createSelector(
    getUserState,
    (state: UserState) => state.isAdmin
);
