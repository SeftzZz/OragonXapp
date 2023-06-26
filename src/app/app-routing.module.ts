import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// AngularFire
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    // ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule),
    // ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'cron-bid',
    loadChildren: () => import('./cron-bid/cron-bid.module').then( m => m.CronBidPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'activation/:kodeaktifasi',
    loadChildren: () => import('./activation/activation.module').then( m => m.ActivationPageModule)
  },
  {
    path: 'swap',
    loadChildren: () => import('./swap/swap.module').then( m => m.SwapPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}