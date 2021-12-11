import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherValorPageRoutingModule } from './escolher-valor-routing.module';

import { EscolherValorPage } from './escolher-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherValorPageRoutingModule
  ],
  declarations: [EscolherValorPage]
})
export class EscolherValorPageModule {}
