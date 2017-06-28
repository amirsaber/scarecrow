import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  public orderList: FirebaseListObservable<any>;
  public buyList: Observable<any>;
  public sellList: Observable<any>;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public db: AngularFireDatabase
  ) { }

  public ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (!this.afAuth.auth.currentUser) {
        this.router.navigate(['/orders']);
      }
    });
    this.orderList = this.db.list('/Orders', {
      query: {
        orderByChild: 'uid',
        equalTo: this.afAuth.auth.currentUser.uid,
      }
    });
    this.buyList = this.orderList.map((orders) => {
      const buy = [];
      for (const order of orders) {
        if (order.type === 'Buy') {
          buy.push(order);
        }
      }
      return buy;
    });
    this.sellList = this.orderList.map((orders) => {
      const sell = [];
      for (const order of orders) {
        if (order.type === 'Sell') {
          sell.push(order);
        }
      }
      return sell;
    });
  }
}
