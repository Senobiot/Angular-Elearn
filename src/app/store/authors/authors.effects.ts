import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';
import { requestAddAuthor, requestAddAuthorFail, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from './authors.actions';

@Injectable()
export class UserEffects {

    getAuthors$ = createEffect(() => this.actions$.pipe(
    ofType(requestAuthors),
    mergeMap(() => this.authorsService.getAll()
      .pipe(
        map(authors => (requestAuthorsSuccess({ authors }) )),
        catchError(async () => requestAuthorsFail())
      ))
    )
  );

  addAuthor$ = createEffect(() => this.actions$.pipe(
    ofType(requestAddAuthor),
    mergeMap(() => this.authorsService.addAuthor()
      .pipe(
        map(() => (requestAddAuthorSuccess())),
        catchError(async () => requestAddAuthorFail())
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService  
  ) {}
}
