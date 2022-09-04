import { movies } from "./modules/data.json";
import "./modules/jquery-3.6.0";
import "./scss/styles.scss";

if (module.hot) {
  module.hot.accept();
}

const search = document.getElementById("search");

insertHTML(selectCategory(movies, "romance"), $("#movies-romance"));
insertHTML(selectCategory(movies, "drama"), $("#movies-drama"));
insertHTML(selectCategory(movies, "ficção"), $("#movies-ficcao"));
insertHTML(selectCategory(movies, "comedia"), $("#movies-comedia"));


function insertHTML(data, local) {
  local.append(
    data
      .map(mov => {
        return `       
          <div class="movie">
            <figure class='figure'>
              <img src="${mov.image}" alt="">
               <a href=${mov.url}> 
                  <figcaption class='caption'>
                    <h6>${mov.name}</h6>
                    <p><span>Diretor: </span> ${mov.director}</p>
                    <p><span>Ano: </span> ${mov.year}</p>
                  </figcaption>
              </a>
            </figure>
          </div>          
       `;
      })
      .join("")
  );
}

function selectCategory(data, category) {
  const results = data.filter(elem => elem.category == category);
  return results;
}



function paginate(data, page, limt) {
  let pageMovie = data.slice((page - 1) * limt, page * limt);
  return pageMovie;
}

search.onchange = function () {
  let termo = this.value;
  let expressaoReg = new RegExp(termo.trim(), "i");

  const results = movies.filter(elem => {
    return expressaoReg.test(elem.name);
  });

  if (results.length === 0) {
    $("#movies").html("");
    $("#movies").append("<h3 id='not-found'>Movie not found in data</h3>");
    $("#search").val("");
  }

  if (results.length < movies.length && results.length > 0) {
    $("#movies").html("");
    insertHTML(results, $(".movies"));
    $("#search").val("");
  }
};
