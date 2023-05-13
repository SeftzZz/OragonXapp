import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamehubPage } from './gamehub.page';

const routes: Routes = [
  {
    path: '',
    component: GamehubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamehubPageRoutingModule {}
