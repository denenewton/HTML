const movieDiv = document.querySelector(".movies");
const searchElem = document.getElementById("search");

export function movieHtml(results) {
  movieDiv.innerHTML = `${results
    .map((mov) => {
      return `
                    <div class="movie">
                        <div class="image">
                            <img src="${mov.image}" alt=" image ${mov.name}">
                        </div>
                        <div class="description">
                            <h2><a href="${mov.url}" target="_blanck"> ${mov.name}</a></h2>
                            <h4>Diretor: <span>${mov.director}</span></h4>
                            <p>${mov.comments}</p>
                        </div>
                    </div>
            
                `;
    })
    .join("")}`;
}


export const filtro = (m) => {
  const firstChar = m.name.split("");
  const search = searchElem.value;
  if (search.trim() === "") return []; //retorna o vetor original
  if (firstChar[0].toLowerCase() === search.split("")[0].toLowerCase()) {
    return m;
  } else return; //retorna um vetor vazio
};

export function paginate(vetor, pages, limits) {
  const page = pages;
  const limit = limits;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let results = [];
  results = vetor.slice(startIndex, endIndex);

  return results;
}

export function paginaCorrente(data, page, limit) {
  movieHtml(paginate(data, page, limit));

  $("#nextPage").click(function () {
    page++;
    movieHtml(paginate(data, page, limit));
  });

  $("#prevPage").click(function () {
    if (page > 1) page--;
    movieHtml(paginate(data, page, limit));
  });
}
