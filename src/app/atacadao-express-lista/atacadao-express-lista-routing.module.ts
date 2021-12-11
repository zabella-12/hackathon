import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtacadaoExpressListaPage } from './atacadao-express-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AtacadaoExpressListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtacadaoExpressListaPageRoutingModule {}
