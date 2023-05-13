import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatformStatusPageRoutingModule } from './platform-status-routing.module';

import { PlatformStatusPage } from './platform-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatformStatusPageRoutingModule
  ],
  declarations: [PlatformStatusPage]
})
export class PlatformStatusPageModule {}
