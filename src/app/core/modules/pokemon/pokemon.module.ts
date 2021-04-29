import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPokemonComponent } from './components/list-pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';

@NgModule({
  entryComponents: [],
  declarations: [
    ListPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonRoutingModule,
  ],
  providers: []
})
export class PokemonModule { }
