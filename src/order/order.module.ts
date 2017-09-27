import { environment } from '../environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { OrderMaterialModule } from './modules/material/order-material.module';
import { OrderRoutingModule } from './modules/routing/order-routing.module';

import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { NewOrderCardComponent } from './components/new-order-card/new-order-card.component';
import { NewOrderDialogComponent } from './components/new-order-dialog/new-order-dialog.component';
import { ViewOrderDialogComponent } from './components/view-order-dialog/view-order-dialog.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [
    UserOrdersComponent,
    NewOrderCardComponent,
    NewOrderDialogComponent,
    ViewOrderDialogComponent,
    OrderListComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    OrderMaterialModule,
    OrderRoutingModule
  ],
  entryComponents: [
    NewOrderDialogComponent,
    ViewOrderDialogComponent
  ],
  providers: [],
})
export class OrderModule { }
