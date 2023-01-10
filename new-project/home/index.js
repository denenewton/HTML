import { API_KEY, base_img } from '../js/key.js';

function renderHome() {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=jumanj`
  )
    .then(resp => resp.json())
    .then(data => {
      setMovie(data.results);
      console.log(data.results.id);
    });
}
function setMovie(data) {
  griMovieHTML(data);
}

function griMovieHTML(movie) {
  let list = document.getElementById('ul');

  list.innerHTML = movie
    .map(mov => {
      return `    
      <li><a href=""></a>
      <a class="links" href="../details/?id=${mov.id}">
      <img src="${base_img}${mov.poster_path}" alt="" />
      </a>
      <span>${mov.title}</span>
      </li>
      `;
    })
    .join('');
}

renderHome();
