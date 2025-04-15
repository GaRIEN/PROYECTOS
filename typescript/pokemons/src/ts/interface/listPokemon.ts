export interface Pokemon {
  name: string;
  url: string;
}

export interface listPokemon {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}



export interface PokemonDetails {
  abilities: {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
  }[];
  name: string;
  sprite: {
    front_default: string;
  };
}

export interface Ability {
  name: string;
  url: string;
}