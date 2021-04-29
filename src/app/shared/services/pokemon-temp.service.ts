import { Injectable } from '@angular/core';
import { PokemonDetail, PokemonSprite } from '../models/pokemon.model';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonTempService {
  private STORAGE_FAVORITO = 'poke_favorito';
  private STORAGE_SERVICE = {};

  constructor(
    private pokemonService: PokemonService
  ) { }

  public setFavoritoPokemon(namePokemon: string): void {
    const favoritos = this.getFavoritoPokemon();
    if (favoritos.includes(namePokemon)) {
      return localStorage.setItem(this.STORAGE_FAVORITO, favoritos.filter(f => f !== namePokemon).join('*.*'));
    }
    localStorage.setItem(this.STORAGE_FAVORITO, [...favoritos, namePokemon].join('*.*'));
  }

  public getFavoritoPokemon(): string[] {
    const favorito = localStorage.getItem(this.STORAGE_FAVORITO);
    return (favorito || '').split('*.*') || [];
  }

  public async getImagesPokemon(namePokemon: string): Promise<string[]> {
    const details: PokemonDetail = this.STORAGE_SERVICE[namePokemon] || await this.getDetailPokemon(namePokemon) || {};
    return details.imgs || [];
  }

  public async getDetailPokemon(namePokemon: string): Promise<PokemonDetail> {
    return this.STORAGE_SERVICE[namePokemon] || this.getDetailsPokemonFromApi(namePokemon);
  }

  private async getDetailsPokemonFromApi(namePokemon: string): Promise<PokemonDetail> {
    const pokemon: PokemonDetail = await this.pokemonService.getPokemonByName(namePokemon).toPromise();
    if (!pokemon) {
      return null;
    }
    this.STORAGE_SERVICE[namePokemon] = pokemon;
    this.setImagesInStorage(pokemon.sprites, namePokemon);
    return this.STORAGE_SERVICE[namePokemon];
  }

  private setImagesInStorage(sprites: PokemonSprite, namePokemon: string): void {
    if (!this.STORAGE_SERVICE[namePokemon].imgs) {
      this.STORAGE_SERVICE[namePokemon].imgs = [];
    }
    const models = ['front', 'back'];
    const tipos = ['default', 'female', 'shiny', 'shiny_female'];
    models.forEach(model => {
      tipos.forEach(tipo => {
        if (sprites[`${model}_${tipo}`]) {
          this.STORAGE_SERVICE[namePokemon].imgs.push(sprites[`${model}_${tipo}`]);
        }
      });
    });
  }
}
