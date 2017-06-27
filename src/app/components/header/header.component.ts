import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  public ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
