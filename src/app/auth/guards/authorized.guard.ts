import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
  constructor(public auth: AuthService,  public router: Router) {}
  canLoad(): boolean {
    if (!this.auth.isAuthorized$) {
      this.router.parseUrl('/login');

      return false;
    }
    return true;
  }
}
