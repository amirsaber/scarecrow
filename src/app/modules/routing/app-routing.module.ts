import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../../components/homepage/homepage.component';
import { UserOrdersComponent } from '../../components/user-orders/user-orders.component';
import { OrderListComponent } from '../../components/order-list/order-list.component';

import { AuthGuardService } from './auth-gard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'userorders',
    component: UserOrdersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'orders',
    component: OrderListComponent
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
