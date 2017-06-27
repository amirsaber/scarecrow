import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserOrdersComponent } from '../../components/user-orders/user-orders.component';
import { OrderListComponent } from '../../components/order-list/order-list.component';

import { AuthGuardService } from './auth-gard.service';

const orderRoutes: Routes = [
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
    RouterModule.forRoot(orderRoutes),
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    RouterModule,
  ]
})
export class OrderRoutingModule { }
