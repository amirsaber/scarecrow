import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../../components/homepage/homepage.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    outlet: 'dialog',
    component: DialogComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
