import { helpHttp } from "./helpHttp.js";
import { httpResponseError, listPokemon } from "./interface/interface";
//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const $pokemons = document.getElementById("container__card-pokemons")! as HTMLElement;
const loader = document.getElementById("loader") as HTMLElement;

//servicios
const api = helpHttp();

//funciones
const toggleLoader = (show: boolean): void => {
  loader.style.display = show ? "block" : "none";
};



api
  .get(API_URL)
  .then((res: httpResponseError | listPokemon) => {
    
    if ("err" in res) {
      console.error("Error:", res.statusText || "Unknown error");
    } else {
      $pokemons.innerHTML = "";
    }
  })
  .catch((err) => {
    
    console.error("Error en la solicitud:", err);
  });
