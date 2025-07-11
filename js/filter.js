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


export function startFilter(query) {
    const form = document.querySelector(query);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formulario = event.target;
        const input = formulario.search;
        const select = formulario.minScore;

        const searchTerm = input.value;
        const minScore = select.value;
        console.log(searchTerm, minScore)
        filterMovies(searchTerm, minScore)
    })
}