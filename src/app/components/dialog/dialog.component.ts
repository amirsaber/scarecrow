import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MdDialog } from '@angular/material';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(
    public dialog: MdDialog,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  public ngOnInit() {
    setTimeout(() => {
      this.openDialg();
    }, 100);
  }

  private openDialg() {
    this.activatedRoute.url.subscribe((urlSegments) => {
      const url = urlSegments[0];
      let component;
      if (url.path === 'login') {
        component = LoginDialogComponent;
      }
      const dialogRef = this.dialog.open(LoginDialogComponent);
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate([{
          outlets: {
            dialog: null
          }
        }]);
      });
    });
  }
}
