import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarContaPageRoutingModule } from './pagar-conta-routing.module';

import { PagarContaPage } from './pagar-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarContaPageRoutingModule
  ],
  declarations: [PagarContaPage]
})
export class PagarContaPageModule {}
