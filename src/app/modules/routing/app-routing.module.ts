import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../../components/homepage/homepage.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

import { AuthGuardService } from './auth-gard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    outlet: 'dialog',
    component: DialogComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
