import { helpHttp } from "./helpHttp.js";
import { httpResponseError } from "./interface/httpResponseError";
import { listPokemon } from "./interface/listPokemon";

document.addEventListener("DOMContentLoaded", renderPokemons);

//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const api = helpHttp();
const $pokemons = document.getElementById(
  "containercardpokemons"
)! as HTMLElement;
const loader = document.getElementById("loader") as HTMLElement;

//funciones
const toggleLoader = (show: boolean): void => {
  loader.style.display = show ? "block" : "none";
};

function renderPokemons() {
  toggleLoader(true);
  const pokemons = api
    .get(API_URL)
    .then((res: listPokemon | httpResponseError) => {
      if ("err" in res) {
        console.log("Error: ", res);
      } else {
        let pokemonsHTML = "";
        res.results.forEach((pokemon) => {
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
    });
}
