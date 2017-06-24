import 'hammerjs';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppMaterialModule } from './modules/material/app-material.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { NewOrderCardComponent } from './components/new-order-card/new-order-card.component';
import { NewOrderDialogComponent } from './components/new-order-dialog/new-order-dialog.component';
import { OrderListComponent } from './components/order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    HomePageComponent,
    HeaderComponent,
    UserOrdersComponent,
    NewOrderCardComponent,
    NewOrderDialogComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    LoginDialogComponent,
    NewOrderDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
