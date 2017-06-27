import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public afAuth: AngularFireAuth,
  ) { }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
