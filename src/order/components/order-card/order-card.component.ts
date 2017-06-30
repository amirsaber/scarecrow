import { Component, Input } from '@angular/core';

import { MdDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { NewOrderDialogComponent } from '../new-order-dialog/new-order-dialog.component';
import { ViewOrderDialogComponent } from '../view-order-dialog/view-order-dialog.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input('order')
  public order: any;

  constructor(
    public afAuth: AngularFireAuth,
    public dialog: MdDialog
  ) { }

  openNewOrder() {
    const dialogRef = this.dialog.open(NewOrderDialogComponent);
    dialogRef.componentInstance.order = this.order;
  }

  openViewOrder() {
    const dialogRef = this.dialog.open(ViewOrderDialogComponent);
    dialogRef.componentInstance.order = this.order;
  }
}
