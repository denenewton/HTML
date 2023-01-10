import { API_KEY, base_img } from '../js/key.js';
// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=jumanj`

function renderHome() {
  fetch("../js/data.json")
    .then(resp => resp.json())
    .then(data => {
      setMovie(data);
      console.log(data);
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
      <img src="" alt="" />
      </a>
      <span>${mov.name}</span>
      </li>
      `;
    })
    .join('');
}

renderHome();
