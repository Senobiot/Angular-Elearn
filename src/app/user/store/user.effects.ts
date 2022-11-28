import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions';

@Injectable()
export class UserEffects {

    getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(requestCurrentUser),
    mergeMap(() => this.userService.getUser()
      .pipe(
        map(currentUser => (requestCurrentUserSuccess({ success: true, user: currentUser }) )),
        catchError(async () => requestCurrentUserFail({fail: true}))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService : UserService 
  ) {}
}
