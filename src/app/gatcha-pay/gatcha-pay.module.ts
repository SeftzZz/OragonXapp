import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatchaPayPageRoutingModule } from './gatcha-pay-routing.module';

import { GatchaPayPage } from './gatcha-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatchaPayPageRoutingModule
  ],
  declarations: [GatchaPayPage]
})
export class GatchaPayPageModule {}
