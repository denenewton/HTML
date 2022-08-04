import { data } from "./data.js";
import * as component from "./components.js";

const movieDiv = document.querySelector(".movies");
const searchElem = document.getElementById("search");

component.movieHtml(data);

searchElem.addEventListener("change", () => {

  const results = data.filter(component.filtro);

  if (results.length == 0) {
    movieDiv.innerHTML = "<h3>Movie not found in data</h3>";
    if (search.trim() === "") {
      movieDiv.innerHTML = "";
      component.movieHtml(data);
    }
  } else {
    movieDiv.innerHTML = "";
    component.movieHtml(results);
  }
});


