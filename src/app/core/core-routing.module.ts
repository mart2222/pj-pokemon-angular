import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lista',
    loadChildren: () =>
      import('./modules/pokemon/pokemon.module').then(
        module => module.PokemonModule
      )
  },
  {
    path: 'jogo-adivinhacao',
    loadChildren: () =>
      import('./modules/jogo-adivinhacao-pokemon/jogo-adivinhacao-pokemon.module').then(
        module => module.JogoAdivinhacaoPokemonModule
      )
  },
  { path: '**', pathMatch: 'full', redirectTo: '/lista' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
