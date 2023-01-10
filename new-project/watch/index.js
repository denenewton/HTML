import { dataMovie } from '../js/data.js';

const hrefString = window.location.href;
const title = hrefString.split('name=')[1].split('-').join(' ')


const movie = dataMovie.filter(m => m.name == title);
const {name, url} = movie[0]

function htmlMovie() {
  document.querySelector('.container').innerHTML = `
        <div class="content-movie">
            <iframe id=video src="${url}" width="700"  height="380" allow="autoplay" frameborder="0" scrolling="no" ></iframe>
        </div>
    `;
  document.querySelector('.title-movie').innerHTML = `${name}`;
}


if (movie.length > 0) {
  htmlMovie();
  
} else {
  document.querySelector('.container').innerHTML = `
    <div class="content-movie">
        <h2>Este filme não está mais disponível</h2>
    </div>
`;
}
