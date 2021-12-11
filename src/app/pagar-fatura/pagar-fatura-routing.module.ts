import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarFaturaPage } from './pagar-fatura.page';

const routes: Routes = [
  {
    path: '',
    component: PagarFaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarFaturaPageRoutingModule {}
