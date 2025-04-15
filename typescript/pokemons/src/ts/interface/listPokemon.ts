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
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: {
    type: type;
  }[];
}

export interface type {
  name: string;
  url: string;
}
