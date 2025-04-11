var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { helpHttp } from "../helpHttp.js";
const apiFetch = helpHttp();
export class PokemonsHttpService {
    constructor(url) {
        this.url = url;
    }
    getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = yield apiFetch.get(this.url);
                if ("err" in pokemons) {
                    console.error("Error:", pokemons.statusText || "Unknown error");
                    return pokemons;
                }
                return pokemons;
            }
            catch (error) {
                console.log("Error en la solicitud:", error);
                return { err: true, statusText: "Request failed" };
            }
        });
    }
}
