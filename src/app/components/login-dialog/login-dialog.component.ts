import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MdDialogRef, MdCheckboxChange, MdSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public formErrors = {
    email: [],
    password: []
  };
  private validationMessages = {
    email: {
      'required': 'Email is required.',
      'email': 'Please enter valid email address.',
    },
    password: {
      'required': 'Passwor is required.'
    }
  };
  private firstTime = false;

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    public dialogRef: MdDialogRef<LoginDialogComponent>,
    public snackBar: MdSnackBar
  ) { }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  private onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;

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

  public async login() {
    const data = this.loginForm.value;
    let loginResult: any;
    try {
      if (this.firstTime) {
        loginResult = await this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);
      } else {
        loginResult = await this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
      }
      this.snackBar.open('Loged in successfully', 'Close', {
        duration: 2000,
      });
      this.dialogRef.close();
    } catch (err) {
      this.snackBar.open(err.message, 'Close', {
        duration: 2000,
      });
    }
  }

  firstTimeChange(change: MdCheckboxChange) {
    this.firstTime = change.checked;
  }
}
