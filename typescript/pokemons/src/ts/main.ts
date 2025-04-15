import { helpHttp } from "./helpHttp.js";
import { httpResponseError } from "./interface/httpResponseError";
import { listPokemon, Pokemon, PokemonDetails } from "./interface/listPokemon";
import { PokemonType, pokemonTypes } from "./interface/pokemonTypes.js";

document.addEventListener("DOMContentLoaded", renderPokemons);

//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=10";
const api = helpHttp();
const $pokemons = document.getElementById(
  "containercardpokemons"
)! as HTMLElement;
const loader = document.getElementById("loader") as HTMLElement;

//funciones
const toggleLoader = (show: boolean): void => {
  loader.style.display = show ? "block" : "none";
};

async function renderPokemons() {
  try {
    toggleLoader(true);

    const res: httpResponseError | listPokemon = await api.get(API_URL);
    if ("err" in res) {
      console.error("Error al obtener la lista de pokemons:", res);
      return;
    }

    const pokemonDetails = await fetchAllPokemonDetails(res.results);
    console.log(pokemonDetails);
    const pokemonsHTML = pokemonDetails
      .map((pokemon) => renderPokemonCard(pokemon))
      .join("");

    $pokemons.innerHTML = pokemonsHTML;
  } catch (error) {
    console.error("Error inesperado:", error);
  } finally {
    toggleLoader(false);
  }
}

async function fetchAllPokemonDetails(
  pokemons: Pokemon[]
): Promise<PokemonDetails[]> {
  const promises = pokemons.map((pokemon) =>
    api.get(pokemon.url).then((res: PokemonDetails | httpResponseError) => {
      if ("err" in res) {
        console.error("Error al obtener detalle de pokemon:", res);
        return null;
      }
      return res;
    })
  );
  const results = await Promise.all(promises);
  return results.filter((pokemon) => pokemon !== null);
}

function renderPokemonCard(pokemon: PokemonDetails): string {
  const types = pokemon.types
    .map((tipe) => {
      const { name, color } = traducirTipo(tipe.type.name);
      return `
      <button class="text-white fw-bold border-0 shadow rounded my-1" style="font-size: 0.7rem; background-color: ${color} !important;">
        <span>${name}</span>
      </button>
    `;
    })
    .join("");
  return `
    <div class="flip-card mx-auto">
      <div class="flip__card-inner">
        <div class="flip__card-front d-flex flex-column rounded shadow border-0 bg-light">
          <img src="${pokemon.sprites.other.home.front_default}"
               class="img-fluid rounded"
               style="width: 100%; height: 70%"
               alt="Avatar" />
          <h5 class="fs-5 fw-medium m-2">${pokemon.name}</h5>
          <div class="d-flex m-2 gap-3">
            
             ${types}
           
          </div>
        </div>
        <div class="flip__card-back d-flex flex-column align-items-center justify-content-center rounded shadow bg-primary text-white">
          <h1>Hola reverso</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  `;
}

function traducirTipo(tipoIngles: string): PokemonType {
  return pokemonTypes[tipoIngles] || { name: tipoIngles, color: "#A9A75A" };
}
