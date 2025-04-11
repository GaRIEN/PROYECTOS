import { httpResponseError } from "../interface/httpResponseError";
import { listPokemon } from "../interface/listPokemon";
import { PokemonsService } from "../interface/pokemonsService";
import { helpHttp } from "../helpHttp.js";


const apiFetch = helpHttp();

export class PokemonsHttpService implements PokemonsService {

    constructor( private url:string) {
    }

  async getAllPokemons(): Promise<listPokemon | httpResponseError> {
   
    try {
      const pokemons = await apiFetch.get(this.url);
      if ("err" in pokemons) {
        console.error("Error:", pokemons.statusText || "Unknown error");
        return pokemons;
      }
      return pokemons;
    } catch (error) {
      console.log("Error en la solicitud:", error);
      return { err: true, statusText: "Request failed" } as httpResponseError;
    }
  }
}
