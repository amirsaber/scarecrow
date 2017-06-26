import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdButtonModule,
  MdDialogModule,
  MdInputModule,
  MdCheckboxModule,
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
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdCardModule,
    MdSelectModule,
    MdTabsModule
  ]
})
export class AppMaterialModule { }
