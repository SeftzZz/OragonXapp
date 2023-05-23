import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';

// AngularFire
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getPerformance } from "firebase/performance";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  //STAGGING
  apiKey: "AIzaSyDA_nhLRt9466wGY5ywZtcXWdOtbPas_xU",
  authDomain: "oragonx-staging.firebaseapp.com",
  projectId: "oragonx-staging",
  storageBucket: "oragonx-staging.appspot.com",
  messagingSenderId: "292415733843",
  appId: "1:292415733843:web:1f06b3e1b5d11fd3bf86a6",
  measurementId: "${config.measurementId}",
  vapidKey: "BH7Dmk7pcc69ah-AYrnp5VlzRc3zBmy9VFHtCFJ25_20rpKaasc-avWh6CF85g_QgV3C7xfRPxuFTOsVTj_Bs28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);

@NgModule({
  declarations: [AppComponent],  
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
      rippleEffect: true,
      mode: 'md'
    }), 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else {
        return getAuth();
      }
    }),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatePipe, Push],
  bootstrap: [AppComponent],
})
export class AppModule {}