import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardAdivinhacaoPokemonComponent } from './components/card-adivinhacao-pokemon/card-adivinhacao-pokemon.component';
import { JogoAdivinhacaoPokemonComponent } from './components/jogo-adivinhacao-pokemon.component';
import { OpcaoAdivinhacaoPokemonComponent } from './components/opcao-adivinhacao-pokemon/opcao-adivinhacao-pokemon.component';
import { JogoAdivinhacaoPokemonRoutingModule } from './jogo-adivinhacao-pokemon-routing.module';

@NgModule({
  entryComponents: [],
  declarations: [
    JogoAdivinhacaoPokemonComponent,
    CardAdivinhacaoPokemonComponent,
    OpcaoAdivinhacaoPokemonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    JogoAdivinhacaoPokemonRoutingModule,
  ],
  providers: []
})
export class JogoAdivinhacaoPokemonModule { }
