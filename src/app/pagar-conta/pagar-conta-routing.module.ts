import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarContaPage } from './pagar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: PagarContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarContaPageRoutingModule {}
