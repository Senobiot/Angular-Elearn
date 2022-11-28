import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {
    addedAuthor$ = this.store.pipe(select(getAddedAuthors));
    authors$ = this.store.pipe(select(getAuthors));

  constructor(private store: Store<AuthorsState>) {}

  getAuthors (): void {
    this.store.dispatch(new requestAuthors());
  }

  addAuthor (author: string): void {
    this.store.dispatch(new requestAddAuthor(authorName: author));
  }
}
