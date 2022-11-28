import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as authActions from "./auth.actions";
import { AuthState } from "./auth.reducer";
import { getSpecificErrorMessage, getToken, isUserAuthorized } from "./auth.selectors";


@Injectable()
export class AuthStateFacade {
    isAuthorized$ = this.store.pipe(select(isUserAuthorized));
    getToken$ = this.store.pipe(select(getToken));
    getLoginErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));
    getRegisterErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

  constructor(private store: Store<AuthState>) {}

  login(name: string, password: string): void {
    this.store.dispatch(new authActions.requestLogin(name, password));
  }

  register(): void {
    this.store.dispatch(new authActions.requestRegister());
  }

  logout(): void {
    this.store.dispatch(new authActions.requestLogout());
  }

  closeSession(): void {
    this.store.dispatch(new authActions.requestLogoutSuccess());
  }

  setAuthorization(): void {
    this.store.dispatch(new authActions.requestLoginSuccess({ token: sessionStorage.getToken()));
  }
}
