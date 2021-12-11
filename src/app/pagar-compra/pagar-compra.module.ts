import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarCompraPageRoutingModule } from './pagar-compra-routing.module';

import { PagarCompraPage } from './pagar-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarCompraPageRoutingModule
  ],
  declarations: [PagarCompraPage]
})
export class PagarCompraPageModule {}
