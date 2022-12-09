import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEcontradaComponent } from './pagina-nao-econtrada/pagina-nao-econtrada.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'carrinho', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },
  { path: '**', component: PaginaNaoEcontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
