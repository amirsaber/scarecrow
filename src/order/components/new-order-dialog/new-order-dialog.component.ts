import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MdDialogRef, MdCheckboxChange, MdSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.scss']
})
export class NewOrderDialogComponent implements OnInit {
  public order = {
    type: 'Sell',
    grain: 'Wheat',
    amount: null,
    $key: null,
    email: null,
    uid: null
  };
  public orderForm: FormGroup;
  public formErrors = {
    type: [],
    grain: [],
    amount: []
  };
  public types = ['Buy', 'Sell'];
  public grains = ['Wheat', 'Barley'];
  private validationMessages = {
    type: {
      'required': 'Type is required.',
    },
    amount: {
      'required': 'Amount is required.'
    },
    grain: {
      'required': 'Grain is required.'
    }
  };

  constructor(
    public formBuilder: FormBuilder,
    public db: AngularFireDatabase,
    public dialogRef: MdDialogRef<NewOrderDialogComponent>,
    public snackBar: MdSnackBar,
    public afAuth: AngularFireAuth,
  ) { }

  public ngOnInit() {
    this.orderForm = this.formBuilder.group({
      type: [this.order.type],
      amount: [this.order.amount, Validators.required],
      grain: [this.order.grain, Validators.required]
    });

    this.orderForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  private onValueChanged(data?: any) {
    if (!this.orderForm) { return; }
    const form = this.orderForm;

    for (const field in this.formErrors) {
      if (field) {
        this.formErrors[field] = [];
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (key) {
              this.formErrors[field].push(messages[key]);
            }
          }
        }
      }
    }
  }

  public createOrder() {
    const data = this.orderForm.value;
    try {
      const list = this.db.list('/Orders')
      list.push({
        uid: this.afAuth.auth.currentUser.uid,
        amount: Number.parseInt(data.amount, 10),
        grain: data.grain,
        type: data.type,
        email: this.afAuth.auth.currentUser.email
      });
      this.snackBar.open('Order Added', 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    } catch (err) {
      this.snackBar.open(err.message, 'Close', {
        duration: 2000,
      });
    }
  }

  public saveOrder() {
    const data = this.orderForm.value;
    try {
      const order = this.db.object(`/Orders/${this.order.$key}`)
      order.update({
        uid: this.afAuth.auth.currentUser.uid,
        amount: Number.parseInt(data.amount, 10),
        grain: data.grain,
        type: data.type,
        email: this.afAuth.auth.currentUser.email
      });
      this.snackBar.open('Order Edited', 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    } catch (err) {
      this.snackBar.open(err.message, 'Close', {
        duration: 2000,
      });
    }
  }

  public deleteOrder() {
    const data = this.orderForm.value;
    try {
      const order = this.db.object(`/Orders/${this.order.$key}`)
      order.remove();
      this.snackBar.open('Order Deleted', 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    } catch (err) {
      this.snackBar.open(err.message, 'Close', {
        duration: 2000,
      });
    }
  }
}
