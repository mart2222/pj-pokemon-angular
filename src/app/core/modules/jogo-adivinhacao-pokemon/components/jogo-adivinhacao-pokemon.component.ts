import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-jogo-adivinhacao-pokemon',
  templateUrl: './jogo-adivinhacao-pokemon.component.html',
  styleUrls: ['./jogo-adivinhacao-pokemon.component.scss'],
})
export class JogoAdivinhacaoPokemonComponent implements OnInit {

  loadingListaPokemon: boolean;
  pokemons: Pokemon[] = [];
  pokemon: Pokemon;
  selecionou: string;

  constructor(
    private pokemonService: PokemonService,
  ) { }


  public ngOnInit(): void {
    this.getListaPokemons();
  }

  private getListaPokemons(): void {
    this.pokemonService.listPokemon(1, 50)
      .pipe(
        finalize(() => this.loadingListaPokemon = false),
        take(1)
      )
      .subscribe(async pokemons => {
        if (pokemons.results) {
          const results = [];
          [...Array(5).keys()].forEach(() => {
            const index = this.randomNumber(0, pokemons.results.length - this.pokemons.length - 1);
            results.push(pokemons.results[index]);
            pokemons.results.splice(index, 1);
          });

          this.pokemons = results.map(pokemon => ({
            ...pokemon,
            nomePokemon: this.getNomePokemon(pokemon.name),
          }));

          const indexAux = this.randomNumber(0, this.pokemons.length - 1);
          this.pokemons[indexAux].adivinhacao = true;
          this.pokemon = this.pokemons[indexAux];
        }
      });
  }

  private getNomePokemon(name: string): string {
    const nameAux = name.split('-').join(' ');
    return nameAux.charAt(0).toUpperCase() + nameAux.slice(1);
  }

  private randomNumber(min: number, max: number): number {
    const minAux = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - minAux + 1)) + minAux;
  }

  public jogarNovamente(): void {
    this.selecionou = '';
    this.pokemon = null;
    this.getListaPokemons();
  }

  public get acertou(): boolean {
    return this.pokemon && this.selecionou === this.pokemon.name;
  }
}
