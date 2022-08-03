import { data } from "./data.js";
const movieDiv = document.querySelector(".movies");
const searchElem = document.getElementById('search').value;
const results = data.filter((m) => m.name == "Jumanji");


const movieHtml = (results) => {
  movieDiv.innerHTML += `${results
    .map((mov) => {
      return `
                <div class="movie">
                    <div class="image">
                        <img src="${mov.image}" alt=" image ${mov.name}">
                    </div>
                    <div class="description">
                        <h2>${mov.name}</h2>
                        <h4>Diretor: <span>${mov.director}</span></h4>
                        <p>${mov.comments}</p>
                    </div>
                </div>
        
            `;
    }).join("")}`;
};

movieHtml(results)


console.log(results);
console.log(searchElem)