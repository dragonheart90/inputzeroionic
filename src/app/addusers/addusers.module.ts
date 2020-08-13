import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddusersPageRoutingModule } from './addusers-routing.module';

import { AddusersPage } from './addusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddusersPageRoutingModule
  ],
  declarations: [AddusersPage]
})
export class AddusersPageModule {}
