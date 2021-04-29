import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonTempService } from '../../services/pokemon-temp.service';
import { ModalPokemonDetailComponent } from '../modal-pokemon-detail/modal-pokemon-detail.component';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent implements OnInit {
  @Input() item: Pokemon;
  @Input() fixed: boolean;

  loadingImage: boolean;
  loadingPeso: boolean;
  peso: number;
  tooltipFavorito: string;

  constructor(
    private modalService: BsModalService,
    private pokemonTempService: PokemonTempService,
  ) { }

  ngOnInit() {
    this.setTooltipeDescricao();
    this.setImages();
    this.setPeso();
  }

  private setTooltipeDescricao(): void {
    const acao = this.item.favorito ? 'Desfavoritar' : 'Favoritar';
    this.tooltipFavorito = `${acao} ${this.item.nomePokemon}`;
  }

  private async setImages(): Promise<void> {
    try {
      if (this.item.imgs) {
        return;
      }
      this.loadingImage = true;
      this.item.imgs = await this.pokemonTempService.getImagesPokemon(this.item.name);
    } finally {
      this.loadingImage = false;
    }
  }

  private async setPeso(): Promise<void> {
    try {
      if (this.item.details) {
        return;
      }
      this.loadingPeso = true;
      this.item.details = await this.item.getDetails();
    } finally {
      this.loadingPeso = false;
    }
  }

  public openModal(): void {
    if (this.fixed) {
      return;
    }
    const initialState = {
      pokemon: this.item
    };
    this.modalService.show(ModalPokemonDetailComponent, { initialState });
  }

  public clickFavorito(): void {
    if (this.fixed) {
      return;
    }
    this.item.favorito = !this.item.favorito;
    this.pokemonTempService.setFavoritoPokemon(this.item.name);
    this.setTooltipeDescricao();
  }
}
