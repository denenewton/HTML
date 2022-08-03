import { data } from "./data.js";
import * as component from "./components.js";

const movieDiv = document.querySelector(".movies");
let searchElem = document.getElementById("search");

component.movieHtml(data);

searchElem.addEventListener("change", () => {
  let search = searchElem.value.toLowerCase();
  const results = data.filter((m) => m.name.toLocaleLowerCase() == search);
  if (results[0] === undefined) {
    movieDiv.innerHTML = "<h3>Movie not found in data</h3>";
    if (search === "") {
      movieDiv.innerHTML = "";
      component.movieHtml(data);
    }
  } else {
    movieDiv.innerHTML = "";
    component.movieHtml(results);
  }
});
