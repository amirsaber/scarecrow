import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MdDialog } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: firebase.User;

  constructor(
    public dialog: MdDialog,
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

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
    this.router.navigate(['/']);
  }
}
