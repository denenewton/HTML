
const movieDiv = document.querySelector(".movies");

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




