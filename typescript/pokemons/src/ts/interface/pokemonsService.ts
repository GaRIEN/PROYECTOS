import { httpResponseError } from "./httpResponseError";
import { listPokemon } from "./listPokemon";
export interface PokemonsService {
    getAllPokemons():  Promise<listPokemon | httpResponseError>;
    // getPokemonById: (id: string) => Promise<any>;
    // createPokemon: (pokemon: any) => Promise<any>;
    // updatePokemon: (id: string, pokemon: any) => Promise<any>;
    // deletePokemon: (id: string) => Promise<any>;
}