import { Component } from '@angular/core';

import { MdDialog } from '@angular/material';

import { NewOrderDialogComponent } from '../new-order-dialog/new-order-dialog.component';

@Component({
    selector: 'app-new-order-card',
    templateUrl: './new-order-card.component.html',
    styleUrls: ['./new-order-card.component.scss']
})
export class NewOrderCardComponent {
    constructor(
        public dialog: MdDialog,
    ) { }

    openNewOrder() {
        this.dialog.open(NewOrderDialogComponent);
    }
}
