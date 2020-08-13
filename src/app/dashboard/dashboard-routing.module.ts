import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:
      [
        {
          path: 'home',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
              }
            ]
        },
        {
          path: 'assesment',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../assesment/assesment.module').then( m => m.AssesmentPageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
