export class Pokemon {
  name: string;
  url: string;

  nomePokemon?: string;
  imgs?: string[];
  favorito?: boolean;
  adivinhacao?: boolean;
  getDetails?: () => PokemonDetail;
  details?: PokemonDetail;
}

export class PokemonAtributo {
  label: string;
  value: number;
}

export class PokemonDetail {
  id: number;
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: PokemonGameIndice[];
  height: number;
  held_items: any[];
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: any[];
  species: PokemonSpecies;
  sprites: PokemonSprite;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
  imgs?: string[];
}

export class PokemonSprite {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

export class PokemonContentList {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonAbility2 {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: PokemonAbility2;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonVersion {
  name: string;
  url: string;
}

export interface PokemonGameIndice {
  game_index: number;
  version: PokemonVersion;
}

export interface PokemonMove2 {
  name: string;
  url: string;
}

export interface PokemonMoveLearnMethod {
  name: string;
  url: string;
}

export interface PokemonVersionGroup {
  name: string;
  url: string;
}

export interface PokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokemonMoveLearnMethod;
  version_group: PokemonVersionGroup;
}

export interface PokemonMove {
  move: PokemonMove2;
  version_group_details: PokemonVersionGroupDetail[];
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface PokemonStat2 {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStat2;
}

export interface PokemonType2 {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: PokemonType2;
}
