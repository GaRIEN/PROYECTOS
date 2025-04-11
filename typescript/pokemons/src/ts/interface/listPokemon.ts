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