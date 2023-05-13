import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2pmarketPage } from './p2pmarket.page';

const routes: Routes = [
  {
    path: '',
    component: P2pmarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2pmarketPageRoutingModule {}
