import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from 'src/app/services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public userStoreService: UserStoreService,  public router: Router) {}

  canActivate() {
      if (!this.userStoreService.isAdmin$) {
        this.router.parseUrl('/courses');
  
        return false;
      }
      return true;
  }
}
