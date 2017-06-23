import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdButtonModule
} from '@angular/material';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    BrowserAnimationsModule
  ]
})
export class CustomMaterialModule { }
