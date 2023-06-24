import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DialogComponent } from './dialog/dialog.component';
import { CmsLandingComponent } from './cms-landing/cms-landing.component';
import { UserListComponent } from './user-list/user-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { GachaPageComponent } from './gacha-page/gacha-page.component';
import { CartsviewComponent } from './cartsview/cartsview.component';
import { CartsremoveComponent } from './cartsremove/cartsremove.component';
import { ItemsbackComponent } from './itemsback/itemsback.component';

const config = {
  apiKey: "AIzaSyD9acGWMDPjhyFG2eKz0Hd8TgSSRuUlQVs",
  authDomain: "oragonx-19744.firebaseapp.com",
  projectId: "oragonx-19744",
  storageBucket: "oragonx-19744.appspot.com",
  messagingSenderId: "1036604830593",
  appId: "1:1036604830593:web:c954871ef393453cd6ae80",
  measurementId: "${config.measurementId}"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DialogComponent,
    CmsLandingComponent,
    UserListComponent,
    TransactionListComponent,
    ItemsListComponent,
    DialogConfirmComponent,
    DialogAddComponent,
    GachaPageComponent,
    CartsviewComponent,
    CartsremoveComponent,
    ItemsbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
