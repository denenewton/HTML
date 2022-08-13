export function movieHtml(results) {
  $('.movies').html(results
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
    }).join('')
    )
}

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
