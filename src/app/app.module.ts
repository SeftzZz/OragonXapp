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
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
    provideFirebaseApp(() => initializeApp(environment.firebase2)),
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
    AngularFireModule.initializeApp(environment.firebase2),
    // AngularFireModule.initializeApp(environment.firebase, 'secondary'),
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatePipe, Push, NativeStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}