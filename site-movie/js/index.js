import { data } from "./data.js";
import * as component from "./components.js";

$(document).ready(function () {
  var page = 1;
  const limt = 4;
  component.movieHtml(component.paginate(data, page, limt));
  $("#search").focus(); //mantem o focus em search

  $("#nextPage").click(function () {
    page++;
    component.movieHtml(component.paginate(data, page, limt));
  });

  $("#prevPage").click(function () {
    if (page > 1) page--;
    component.movieHtml(component.paginate(data, page, limt));
  });

  $("#search").change(function () {
    const results = data.filter(component.filtro);
    $(".changePages").hide(); // ocultar o link nextPage

    if (results.length === 0) {
      $(".movies").html("<h3>Movie not found in data</h3>");
      $("#search").val(""); // limpa o valor do compo em search
    }
    if (results.length === data.length) {
      $(".movies").html();
      component.movieHtml(component.paginate(data, 1, 3));
      $(".changePages").show();
    }
    if (results.length < data.length && results.length > 0) {
      $(".movies").html();
      component.movieHtml(results);
      $("#search").val("");
    }
  });
});
