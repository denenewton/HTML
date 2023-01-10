import { API_KEY, base_img } from '../js/key.js';
import { dataMovie } from '../js/data.js';

const hrefString = window.location.href;
const id = hrefString.split('id=')[1];

function renderDetails(id) {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  )
    .then(resp => resp.json())
    .then(data => {
      const { title, overview, poster_path, release_date } = data;
      const Movie = dataMovie.filter(d => d.name === data.title);
      const name_filme= title.split(' ').join('-')
      console.log(name_filme);
      
      const url = Movie.length === 0 ? '/' : Movie[0].url;

      const movie = {
        id,
        title: name_filme,
        overview,
        url: url,
        image: `${base_img}${poster_path}`,
        releaseData: release_date,
      };

      setDetailMovieHtml(movie);
    });
}

function setDetailMovieHtml(movie) {
  console.log();
  
  let url =
    movie.url == '/'
      ? ''
      : `<a href="../watch/?name=${movie.title}" >
      <button>Watch  Now</button>
    </a>`;
console.log(url.length);

  document.getElementById('ul').innerHTML = `
    <div class="container-details">
        <div class="movie" key=${movie.id}>
          <img src=${movie.image} alt=${movie.title} />
          <div class="details">
            <h1>${movie.title}</h1>
            <span>${movie.overview}</span>
            <span class="release-date">${movie.releaseData}</span>
            <a href="../home">
              <button>Go Back</button>
            </a>
            ${url}
          </div>
        </div>
      </div> 
    `;
}

renderDetails(id);
