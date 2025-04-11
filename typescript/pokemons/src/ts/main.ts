import { PokemonsHttpService } from "./service/pokemonsHttp.service.js";

document.addEventListener("DOMContentLoaded", renderPokemons);

//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const $pokemons = document.getElementById(
  "containercardpokemons"
)! as HTMLElement;
const loader = document.getElementById("loader") as HTMLElement;
const pokemonsService = new PokemonsHttpService(API_URL);

//funciones
const toggleLoader = (show: boolean): void => {
  loader.style.display = show ? "block" : "none";
};

async function renderPokemons() {
  toggleLoader(true);
  const pokemons = await pokemonsService.getAllPokemons();

  if ("err" in pokemons) {
    document.body.innerHTML = `<p>Error: ${pokemons.statusText}</p>`;
    return;
  }

  let pokemonsHTML = "";

  pokemons.results.forEach((pokemon) => {
    pokemonsHTML += `
            <div class="flip-card mx-auto">
              <div class="flip__card-inner">
                <div
                  class="flip__card-front d-flex flex-column rounded shadow border-0 bg-light"
                >
                  <img
                    src="./assets/img/clientegalvan.jpeg"
                    class="img-fluid rounded"
                    style="width: 100%; height: 70%"
                    alt="Avatar"
                  />

                  <h5 class="fs-5 fw-medium m-2">${pokemon.name}</h5>
                  <div class="d-flex m-2 gap-3">
                    <button
                      class="bg-danger text-white fw-bold border-0 shadow rounded my-1"
                      style="font-size: 0.7rem"
                    >
                      <span>habilidad</span>
                    </button>
                    <button
                      class="bg-danger text-white fw-bold border-0 shadow rounded my-1"
                      style="font-size: 0.7rem"
                    >
                      <span>habilidad</span>
                    </button>
                  </div>
                </div>
                <div
                  class="flip__card-back d-flex flex-colmn align-items-center justify-content-center rounded shadow bg-primary text-white"
                >
                  <h1>hola reverso</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
    `;
  });
  toggleLoader(false);
  $pokemons.innerHTML = pokemonsHTML;
}
