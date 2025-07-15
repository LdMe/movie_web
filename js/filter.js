import fetchData from "./api.js";
import { createCardsFromResponse,createLoadingMessage } from "./cards.js";
import { datos as defaultDatos } from "./datos.js";

function filterMovies(searchTerm, minScore) {
    const films = document.getElementsByClassName("film-card");
    for (let i = 0; i < films.length; i++) {
        const film = films[i];
        const score = film.querySelector(".score").textContent;
        const title = film.querySelector(".title").textContent;
        const description = film.querySelector(".description").textContent;
        console.log(score, minScore)
        if (parseInt(score) >= parseInt(minScore) && (title.includes(searchTerm) || description.includes(searchTerm))) {
            film.classList.remove("hidden");
        } else {
            film.classList.add("hidden");
        }

    }
}

async function fetchMovies(query,page){
    createLoadingMessage();
    const datos = await fetchData(query,page);
    if(datos.error){
        createCardsFromResponse(defaultDatos)
    }else{
        createCardsFromResponse(datos);
    }
} 

export function startFilter(query) {
    const form = document.querySelector(query);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formulario = event.target;
        const input = formulario.search;
        const pageInput = formulario.page;

        const searchTerm = input.value;
        const page = pageInput.value;
        console.log(searchTerm, page)
        fetchMovies(searchTerm,page);
        //filterMovies(searchTerm, minScore)
    })
}