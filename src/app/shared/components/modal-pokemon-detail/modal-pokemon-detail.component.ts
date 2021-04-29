import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-modal-pokemon-detail',
  templateUrl: './modal-pokemon-detail.component.html',
  styleUrls: ['./modal-pokemon-detail.component.scss'],
})
export class ModalPokemonDetailComponent {
  pokemon: Pokemon;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

}
