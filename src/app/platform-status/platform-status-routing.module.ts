import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformStatusPage } from './platform-status.page';

const routes: Routes = [
  {
    path: '',
    component: PlatformStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformStatusPageRoutingModule {}
