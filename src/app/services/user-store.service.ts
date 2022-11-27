import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

interface UserStore {
  users?: Array<string>;
  currentUser: string
}

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  ADMIN = 'admin';
  private name$$ = new BehaviorSubject<string>('');
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();
  store: UserStore = {
    currentUser: ''
  };

  constructor(private userService: UserService) { }

  getUser() {
    return this.userService.getUser().subscribe((response: any) => {
      if (response.successful) {
        this.name$$.next(response);
  
        if (response === this.ADMIN) {
          this.isAdmin$$.next(true);
          this.store.currentUser = this.ADMIN;
        }
        this.store.currentUser = response;
      }
    })
  }
}
