import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdCheckboxModule,
  MdSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule,
    MdSnackBarModule
  ]
})
export class AppMaterialModule { }
