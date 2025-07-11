function createFilmCard(film){
    const article = document.createElement("article");
    const title = document.createElement("h2");
    const release_date = document.createElement("p");
    const image = document.createElement("img");
    const score = document.createElement("p");
    const description = document.createElement("p");
    const moreButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    const textDiv = document.createElement("div");

    article.setAttribute("id","film-"+film.id)
    article.classList.add("card","film-card");

    if(film.poster_path){
      image.src="https://image.tmdb.org/t/p/original/"+film.poster_path
    }else{
      image.src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
    }
    title.classList.add("title")
    title.textContent = film.title;
    
    release_date.textContent = film.release_date;

    score.classList.add("score")
    score.textContent = film.vote_average;

    description.classList.add("description")
    description.textContent = film.overview.substring(0,50)+"...";

    moreButton.textContent="Show more";
    moreButton.addEventListener("click",()=>{
      if(description.classList.contains("full")){
        description.textContent = film.overview.substring(0,50)+"...";
        moreButton.textContent="Show more";
        description.classList.remove("full");
      }else{
        description.textContent = film.overview;
        moreButton.textContent="Show less";
        description.classList.add("full");
      }
      
    })
    deleteButton.textContent="Delete";

    deleteButton.addEventListener("click",()=>{
      article.remove();
    })

    textDiv.classList.add("card--text","hidden");
    article.append(image,textDiv);
    article.addEventListener("mouseover",()=>{
      textDiv.classList.remove("hidden")
    })
    article.addEventListener("mouseout",()=>{
      textDiv.classList.add("hidden")
    })
    textDiv.append(title,description,moreButton,release_date,score,deleteButton)
    return article;
}

function createCardsFromResponse(response){
    const section = document.getElementById("film-list")
    section.innerHTML = "";
    const films = response.results;
    if(films.length === 0){
        section.innerHTML = `
        <p>No results found</p>
        `
        return;
    }
    for(let  i = 0; i < films.length; i++){
        const card = createFilmCard(films[i]);
        section.appendChild(card);
    }

}

export {
    createFilmCard,
    createCardsFromResponse
}