import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsLandingComponent } from './cms-landing/cms-landing.component';
import { GachaPageComponent } from './gacha-page/gacha-page.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartsviewComponent } from './cartsview/cartsview.component';
import { CartsremoveComponent } from './cartsremove/cartsremove.component';
 
const routes: Routes = [
  {
    path: 'cartsview',
    component: CartsviewComponent
  },
  {
    path: 'cartsremove',
    component: CartsremoveComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: CmsLandingComponent
  },
  {
    path: 'items',
    component: ItemsListComponent
  },
  {
    path: 'transaction',
    component: TransactionListComponent
  },
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'gacha',
    component: GachaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
