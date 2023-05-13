import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronBidPage } from './cron-bid.page';

const routes: Routes = [
  {
    path: '',
    component: CronBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronBidPageRoutingModule {}
