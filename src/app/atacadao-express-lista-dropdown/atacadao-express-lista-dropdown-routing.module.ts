import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtacadaoExpressListaDropdownPage } from './atacadao-express-lista-dropdown.page';

const routes: Routes = [
  {
    path: '',
    component: AtacadaoExpressListaDropdownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtacadaoExpressListaDropdownPageRoutingModule {}
