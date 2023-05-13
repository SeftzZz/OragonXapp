import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatchaPayPage } from './gatcha-pay.page';

const routes: Routes = [
  {
    path: '',
    component: GatchaPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatchaPayPageRoutingModule {}
