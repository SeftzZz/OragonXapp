import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { SwiperModule } from "swiper/angular";
import { SwPush } from '@angular/service-worker'; // import SwPush
import { SwUpdate } from '@angular/service-worker'; // import SwUpdate
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    SwPush,
    SwUpdate,
    { provide: 'Window', useValue: window }
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
