import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-opcao-adivinhacao-pokemon',
  templateUrl: './opcao-adivinhacao-pokemon.component.html',
  styleUrls: ['./opcao-adivinhacao-pokemon.component.scss'],
})
export class OpcaoAdivinhacaoPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() selecionou: boolean;
  @Output() selected: EventEmitter<string> = new EventEmitter();

  errou: boolean;

  constructor(
  ) { }

  ngOnInit() {
  }

  public seleciona(): void {
    this.errou = !this.pokemon.adivinhacao;
    this.selected.emit(this.pokemon.name);
  }

}
