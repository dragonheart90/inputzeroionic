import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssesmentPage } from './assesment.page';

const routes: Routes = [
  {
    path: '',
    component: AssesmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssesmentPageRoutingModule {}
