import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronBidPageRoutingModule } from './cron-bid-routing.module';

import { CronBidPage } from './cron-bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronBidPageRoutingModule
  ],
  declarations: [CronBidPage]
})
export class CronBidPageModule {}
