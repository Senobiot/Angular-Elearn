import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { requestLogin, requestLoginFail, requestLoginSuccess } from './auth.actions';

@Injectable()
export class UserEffects {
    login$ = createEffect(() => this.actions$.pipe(
    ofType(requestLogin),
    mergeMap(async () => this.authService.login()
      .pipe(
        map(token => (requestLoginSuccess({loginSuccess: true})),
        catchError(async () => requestLoginFail({
            loginSuccess: false
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private authService : AuthService 
  ) {}
}
