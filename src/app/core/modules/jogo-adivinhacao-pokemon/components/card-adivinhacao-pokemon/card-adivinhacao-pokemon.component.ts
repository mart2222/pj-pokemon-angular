import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonTempService } from 'src/app/shared/services/pokemon-temp.service';

@Component({
  selector: 'app-card-adivinhacao-pokemon',
  templateUrl: './card-adivinhacao-pokemon.component.html',
  styleUrls: ['./card-adivinhacao-pokemon.component.scss'],
})
export class CardAdivinhacaoPokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() selecionou: string;

  loadingImage: boolean;
  img: string;

  constructor(
    private pokemonTempService: PokemonTempService,
  ) { }

  ngOnInit() {
    this.setImages();
  }

  private async setImages(): Promise<void> {
    try {
      if (this.pokemon.imgs) {
        return;
      }
      this.loadingImage = true;
      const imgs = await this.pokemonTempService.getImagesPokemon(this.pokemon.name);
      this.img = imgs[0];
    } finally {
      this.loadingImage = false;
    }
  }

  public get acertou(): boolean {
    return this.selecionou === this.pokemon.name;
  }
}
