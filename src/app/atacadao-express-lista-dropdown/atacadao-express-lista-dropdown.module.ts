import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressListaDropdownPageRoutingModule } from './atacadao-express-lista-dropdown-routing.module';

import { AtacadaoExpressListaDropdownPage } from './atacadao-express-lista-dropdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtacadaoExpressListaDropdownPageRoutingModule
  ],
  declarations: [AtacadaoExpressListaDropdownPage]
})
export class AtacadaoExpressListaDropdownPageModule {}
