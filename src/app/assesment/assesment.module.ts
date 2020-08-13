import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssesmentPageRoutingModule } from './assesment-routing.module';

import { AssesmentPage } from './assesment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssesmentPageRoutingModule
  ],
  declarations: [AssesmentPage]
})
export class AssesmentPageModule {}
