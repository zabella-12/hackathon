import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtacadaoExpressQrcodePageRoutingModule } from './atacadao-express-qrcode-routing.module';

import { AtacadaoExpressQrcodePage } from './atacadao-express-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtacadaoExpressQrcodePageRoutingModule
  ],
  declarations: [AtacadaoExpressQrcodePage]
})
export class AtacadaoExpressQrcodePageModule {}
