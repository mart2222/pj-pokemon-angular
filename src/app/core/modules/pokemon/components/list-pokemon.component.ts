import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { finalize, take } from 'rxjs/operators';
import { PokemonContentList } from 'src/app/shared/models/pokemon.model';
import { PokemonTempService } from 'src/app/shared/services/pokemon-temp.service';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {

  loadingListaPokemon: boolean;
  pokemonContent: PokemonContentList;
  currentPage = 1;

  constructor(
    private pokemonService: PokemonService,
    private pokemonTempService: PokemonTempService
  ) { }


  public ngOnInit(): void {
    this.getListaPokemons();
  }

  private getListaPokemons(): void {
    this.pokemonService.listPokemon(this.currentPage)
      .pipe(
        finalize(() => this.loadingListaPokemon = false),
        take(1)
      )
      .subscribe(async pokemons => {
        if (pokemons.results) {
          const results = [];
          const favoritos = this.pokemonTempService.getFavoritoPokemon();
          const promises = await pokemons.results.map(async pokemon => {
            results.push({
              ...pokemon,
              nomePokemon: this.getNomePokemon(pokemon.name),
              favorito: favoritos.includes(pokemon.name),
              getDetails: () => this.pokemonTempService.getDetailPokemon(pokemon.name)
            });
          });
          await Promise.all(promises);
          pokemons.results = results;
        }
        this.pokemonContent = pokemons;
      });
  }

  public pageChanged(event: PageChangedEvent): void {
    this.currentPage = event.page;
    this.getListaPokemons();
  }

  private getNomePokemon(name: string): string {
    const nameAux = name.split('-').join(' ');
    return nameAux.charAt(0).toUpperCase() + nameAux.slice(1);
  }
}
