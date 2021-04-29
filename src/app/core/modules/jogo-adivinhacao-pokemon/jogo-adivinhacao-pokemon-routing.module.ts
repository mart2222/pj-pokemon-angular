import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoAdivinhacaoPokemonComponent } from './components/jogo-adivinhacao-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: JogoAdivinhacaoPokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogoAdivinhacaoPokemonRoutingModule { }
