import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarFaturaPageRoutingModule } from './pagar-fatura-routing.module';

import { PagarFaturaPage } from './pagar-fatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarFaturaPageRoutingModule
  ],
  declarations: [PagarFaturaPage]
})
export class PagarFaturaPageModule {}
