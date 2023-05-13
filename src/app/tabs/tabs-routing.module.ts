import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// AngularFire
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'resetpassword',
        loadChildren: () => import('../resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
      },
      {
        path: 'p2pmarket',
        loadChildren: () => import('../p2pmarket/p2pmarket.module').then(m => m.P2pmarketPageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'gamehub',
        loadChildren: () => import('../gamehub/gamehub.module').then(m => m.GamehubPageModule)
      },
      {
        path: 'background',
        loadChildren: () => import('../background/background.module').then(m => m.BackgroundPageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'advertise',
        loadChildren: () => import('../advertise/advertise.module').then(m => m.AdvertisePageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'rankings',
        loadChildren: () => import('../rankings/rankings.module').then( m => m.RankingsPageModule)
      },
      {
        path: 'recently-sold',
        loadChildren: () => import('../recently-sold/recently-sold.module').then( m => m.RecentlySoldPageModule)
      },
      {
        path: 'help-center',
        loadChildren: () => import('../help-center/help-center.module').then( m => m.HelpCenterPageModule)
      },
      {
        path: 'platform',
        loadChildren: () => import('../platform-status/platform-status.module').then( m => m.PlatformStatusPageModule)
      },
      {
        path: 'partners',
        loadChildren: () => import('../partners/partners.module').then( m => m.PartnersPageModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('../newsletter/newsletter.module').then( m => m.NewsletterPageModule)
      },
      {
        path: 'swap',
        loadChildren: () => import('../swap/swap.module').then( m => m.SwapPageModule)
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
