import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P2pmarketPageRoutingModule } from './p2pmarket-routing.module';

import { P2pmarketPage } from './p2pmarket.page';

import { DateDifference } from "../date-difference.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2pmarketPageRoutingModule
  ],
  declarations: [P2pmarketPage, DateDifference]
})
export class P2pmarketPageModule {}
