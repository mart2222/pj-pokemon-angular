import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonAtributo } from '../../models/pokemon.model';

const sortValue = (a: PokemonAtributo, b: PokemonAtributo) => (a.value < b.value ? 1 : -1);
@Component({
  selector: 'app-lista-atributo-pokemon',
  templateUrl: './lista-atributo-pokemon.component.html',
})
export class ListaAtributoPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;

  atributos: PokemonAtributo[] = [];
  maiorValor: number;

  constructor() { }

  ngOnInit(): void {
    if (this.pokemon.details && this.pokemon.details.stats) {
      this.atributos = (this.pokemon.details.stats || []).map(stat => ({
        label: stat.stat.name,
        value: stat.base_stat
      }));
    }

    if (this.atributos.length) {
      this.maiorValor = this.atributos.sort(sortValue)[0].value;
    }
  }
}
