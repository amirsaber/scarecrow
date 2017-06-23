import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: firebase.User;

  constructor(
    public dialog: MdDialog,
    public afAuth: AngularFireAuth) {
  }

  public ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  openLogin() {
    this.dialog.open(LoginDialogComponent);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
