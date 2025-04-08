import { helpHttp } from "./helpHttp.js";
//constantes
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";
const $pokemons = document.getElementById("container__card-pokemons");
const loader = document.getElementById("loader");
//servicios
const api = helpHttp();
//funciones
const toggleLoader = (show) => {
    loader.style.display = show ? "block" : "none";
};
api
    .get(API_URL)
    .then((res) => {
    if ("err" in res) {
        console.error("Error:", res.statusText || "Unknown error");
    }
    else {
        $pokemons.innerHTML = "";
    }
})
    .catch((err) => {
    console.error("Error en la solicitud:", err);
});
