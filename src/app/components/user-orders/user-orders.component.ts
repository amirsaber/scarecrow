import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  public ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (!this.afAuth.auth.currentUser) {
        this.router.navigate(['/orders']);
      }
    });
  }
}
