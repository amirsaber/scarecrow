import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderMaterialModule } from './modules/material/order-material.module';
import { OrderRoutingModule } from './modules/routing/order-routing.module';

import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { NewOrderCardComponent } from './components/new-order-card/new-order-card.component';
import { NewOrderDialogComponent } from './components/new-order-dialog/new-order-dialog.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    UserOrdersComponent,
    NewOrderCardComponent,
    NewOrderDialogComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrderMaterialModule,
    OrderRoutingModule
  ],
  entryComponents: [
    NewOrderDialogComponent
  ],
  providers: [],
})
export class OrderModule { }
