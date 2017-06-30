import { Component } from '@angular/core';

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './view-order-dialog.component.html',
  styleUrls: ['./view-order-dialog.component.scss']
})
export class ViewOrderDialogComponent {
  public order = {
    type: 'Sell',
    grain: 'Wheat',
    amount: null,
    $key: null,
    email: null,
    uid: null
  };

  constructor(

  ) { }
}
