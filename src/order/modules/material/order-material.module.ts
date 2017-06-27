import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdSnackBarModule,
  MdCardModule,
  MdSelectModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    MdSelectModule,
    MdTabsModule
  ]
})
export class OrderMaterialModule { }
