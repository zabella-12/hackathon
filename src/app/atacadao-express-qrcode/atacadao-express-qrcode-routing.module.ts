import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtacadaoExpressQrcodePage } from './atacadao-express-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: AtacadaoExpressQrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtacadaoExpressQrcodePageRoutingModule {}
