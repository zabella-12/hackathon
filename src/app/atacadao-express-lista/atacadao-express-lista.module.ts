import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressListaPageRoutingModule } from './atacadao-express-lista-routing.module';

import { AtacadaoExpressListaPage } from './atacadao-express-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtacadaoExpressListaPageRoutingModule
  ],
  declarations: [AtacadaoExpressListaPage]
})
export class AtacadaoExpressListaPageModule {}
