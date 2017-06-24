import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MdDialogRef, MdCheckboxChange, MdSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.scss']
})
export class NewOrderDialogComponent implements OnInit {
  public user: firebase.User;
  public orderForm: FormGroup;
  public formErrors = {
    type: [],
    amount: []
  };
  public types = ['Buy', 'Sell'];
  private validationMessages = {
    type: {
      'required': 'Type is required.',
    },
    amount: {
      'required': 'Amount is required.'
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
      type: ['Sell'],
      amount: ['', Validators.required]
    });

    this.orderForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
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

  public async createOrder() {
    const data = this.orderForm.value;
    try {
      const list = this.db.list(`/Orders/${data.type}`)
      await list.push({
        uid: this.user.uid,
        amount: data.amount
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
}
