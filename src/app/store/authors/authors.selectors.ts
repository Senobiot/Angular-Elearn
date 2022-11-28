import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

const adedAuthor = createFeatureSelector<AuthorsState>('authors');
const authors = createFeatureSelector<AuthorsState>('addedAuthors');

export const getAddedAuthors = createSelector(
    adedAuthor,
    (state: AuthorsState) => state.addedAuthors
);

export const getAuthors = createSelector(
    authors,
    (state: AuthorsState) => state.authors
);

