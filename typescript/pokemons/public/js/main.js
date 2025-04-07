import { helpHttp } from "./helpHttp.js";
const api = helpHttp();
api
    .get("https://pokeapi.co/api/v27/pokemon?limit=160")
    .then((res) => {
    if ("err" in res) {
        console.log("hay error puerco");
        console.log(res.status);
        console.error("Error:", res.statusText || "Unknown error");
    }
    else {
        console.log(res.results);
    }
})
    .catch((err) => {
    console.error("Error en la solicitud:", err);
});
