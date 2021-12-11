import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'atacadao-express-qrcode',
    loadChildren: () => import('./atacadao-express-qrcode/atacadao-express-qrcode.module').then( m => m.AtacadaoExpressQrcodePageModule)
  },
  {
    path: 'atacadao-express-lista',
    loadChildren: () => import('./atacadao-express-lista/atacadao-express-lista.module').then( m => m.AtacadaoExpressListaPageModule)
  },
  {
    path: 'atacadao-express-lista-dropdown',
    loadChildren: () => import('./atacadao-express-lista-dropdown/atacadao-express-lista-dropdown.module').then( m => m.AtacadaoExpressListaDropdownPageModule)
  },
  {
    path: 'pagar-conta',
    loadChildren: () => import('./pagar-conta/pagar-conta.module').then( m => m.PagarContaPageModule)
  },
  {
    path: 'pagar-compra',
    loadChildren: () => import('./pagar-compra/pagar-compra.module').then( m => m.PagarCompraPageModule)
  },
  {
    path: 'finalizar',
    loadChildren: () => import('./finalizar/finalizar.module').then( m => m.FinalizarPageModule)
  },
  {
    path: 'pagar-fatura',
    loadChildren: () => import('./pagar-fatura/pagar-fatura.module').then( m => m.PagarFaturaPageModule)
  },
  {
    path: 'escolher-valor',
    loadChildren: () => import('./escolher-valor/escolher-valor.module').then( m => m.EscolherValorPageModule)
  },
  {
    path: 'boleto',
    loadChildren: () => import('./boleto/boleto.module').then( m => m.BoletoPageModule)
  },
  {
    path: 'pix',
    loadChildren: () => import('./pix/pix.module').then( m => m.PixPageModule)
  },
  {
    path: 'explorar',
    loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
