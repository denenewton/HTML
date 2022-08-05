import { data } from "./data.js";
import * as component from "./components.js";

const movieDiv = document.querySelector(".movies");
const searchElem = document.getElementById("search");


component.movieHtml(component.paginate(data, 1 , 3));

searchElem.addEventListener("change", function() {

  const results = data.filter(component.filtro);
  console.log(results.length)
  console.log(data.length)

  if (results.length === 0) {
    movieDiv.innerHTML = "<h3>Movie not found in data</h3>";
    searchElem.value = ""
   
  }
  if(results.length === data.length) {
    movieDiv.innerHTML = "";
    component.movieHtml(component.paginate(data, 1 , 3));
  }
  if(results.length < data.length && results.length > 0) {
    movieDiv.innerHTML = "";
    component.movieHtml(results);
    searchElem.value = ''
  }
  
});


