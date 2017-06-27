import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {
  private user: firebase.User;

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLogedIn().map((logedIn) => {
      if (logedIn) {
        this.router.navigate([{
          outlets: {
            dialog: null
          }
        }]);
        return false;
      } else {
        return true;
      }
    });
  }

  isLogedIn() {
    return this.afAuth.authState.map((user) => {
      if (user && user.uid) {
        return true;
      } else {
        return false;
      }
    });
  }
}
