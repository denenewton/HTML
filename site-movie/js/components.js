
const movieDiv = document.querySelector(".movies");
const searchElem = document.getElementById("search");

export function movieHtml(results) {
    movieDiv.innerHTML += `${results
        .map((mov) => {
            return `
                    <div class="movie">
                        <div class="image">
                            <img src="${mov.image}" alt=" image ${mov.name}">
                        </div>
                        <div class="description">
                            <h2><a href="${mov.url}"> ${mov.name}</a></h2>
                            <h4>Diretor: <span>${mov.director}</span></h4>
                            <p>${mov.comments}</p>
                        </div>
                    </div>
            
                `;
        })
        .join("")}`;
}

export const filtro = (m) => {
    const firstWord = m.name.split("");
    const search = searchElem.value;
    if (search.trim() === '') return [];
    if (firstWord[0].toLocaleLowerCase() === search.split("")[0].toLowerCase()) {
      return m;
    } else return;
  };


