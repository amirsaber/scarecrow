import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  public buyList: FirebaseListObservable<any>;
  public sellList: FirebaseListObservable<any>;

  constructor(
    public db: AngularFireDatabase
  ) { }

  public ngOnInit() {
    this.buyList = this.db.list('/Orders', {
      query: {
        orderByChild: 'type',
        equalTo: 'Buy'
      }
    });
    this.sellList = this.db.list('/Orders', {
      query: {
        orderByChild: 'type',
        equalTo: 'Sell'
      }
    });
  }
}
