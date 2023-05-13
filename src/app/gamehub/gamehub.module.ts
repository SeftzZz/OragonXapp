import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamehubPageRoutingModule } from './gamehub-routing.module';

import { GamehubPage } from './gamehub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamehubPageRoutingModule
  ],
  declarations: [GamehubPage]
})
export class GamehubPageModule {}
