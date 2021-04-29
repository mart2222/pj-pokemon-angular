import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonContentList, PokemonDetail } from 'src/app/shared/models/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PokemonService {
  private API_URL = `${environment.apiUri}/pokemon`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  listPokemon(page: number = 1, limit = 8): Observable<PokemonContentList> {
    return this.httpClient.get<PokemonContentList>(this.API_URL, {
      params: {
        limit: String(limit),
        offset: String(limit * (page - 1))
      }
    });
  }

  getPokemonByName(name: string): Observable<PokemonDetail> {
    return this.httpClient.get<PokemonDetail>(`${this.API_URL}/${name}`);
  }
}
