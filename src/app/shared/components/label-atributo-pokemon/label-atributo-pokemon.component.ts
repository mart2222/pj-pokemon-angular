import { Component, Input, OnInit } from '@angular/core';
import { PokemonAtributo } from '../../models/pokemon.model';

@Component({
  selector: 'app-label-atributo-pokemon',
  templateUrl: './label-atributo-pokemon.component.html',
  styleUrls: ['./label-atributo-pokemon.component.scss'],
})
export class LabelAtributoPokemonComponent implements OnInit {
  @Input() atributo: PokemonAtributo;
  @Input() maiorValor: number;

  percent: number;

  constructor() { }

  ngOnInit(): void {
    this.percent = Math.round((this.atributo.value * 100) / this.maiorValor);
  }

  public get label(): string {
    const label = this.atributo.label.split('-').join(' ');
    return label.charAt(0).toUpperCase() + label.slice(1);
  }
}
