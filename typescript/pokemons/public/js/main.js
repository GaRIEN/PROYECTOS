var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { helpHttp } from "./helpHttp.js";
import { pokemonTypes } from "./interface/pokemonTypes.js";
document.addEventListener("DOMContentLoaded", renderPokemons);
//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";
const api = helpHttp();
const $pokemons = document.getElementById("containercardpokemons");
const loader = document.getElementById("loader");
//funciones
const toggleLoader = (show) => {
    loader.style.display = show ? "block" : "none";
};
function renderPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            toggleLoader(true);
            const res = yield api.get(API_URL);
            if ("err" in res) {
                console.error("Error al obtener la lista de pokemons:", res);
                return;
            }
            const pokemonDetails = yield fetchAllPokemonDetails(res.results);
            console.log(pokemonDetails);
            const pokemonsHTML = pokemonDetails
                .map((pokemon) => renderPokemonCard(pokemon))
                .join("");
            $pokemons.innerHTML = pokemonsHTML;
        }
        catch (error) {
            console.error("Error inesperado:", error);
        }
        finally {
            toggleLoader(false);
        }
    });
}
function fetchAllPokemonDetails(pokemons) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = pokemons.map((pokemon) => api.get(pokemon.url).then((res) => {
            if ("err" in res) {
                console.error("Error al obtener detalle de pokemon:", res);
                return null;
            }
            return res;
        }));
        const results = yield Promise.all(promises);
        return results.filter((pokemon) => pokemon !== null);
    });
}
function renderPokemonCard(pokemon) {
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
function traducirTipo(tipoIngles) {
    return pokemonTypes[tipoIngles] || { name: tipoIngles, color: "#A9A75A" };
}
