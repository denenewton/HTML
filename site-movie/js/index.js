import { data } from "./data.js";
import * as component from "./components.js";

$(document).ready(function () {
  $("#search").focus(); //mantem o focus em search
  var page = 1;
  const limit = 4;

  component.paginaCorrente(data,page,limit)


  $("#search").change(function () {

    const results = data.filter(component.filtro);

    $(".changePages").hide(); // ocultar o link nextPage

    if (results.length === 0) {
      $(".movies").html("<h3>Movie not found in data</h3>");
      $("#search").val(""); 
      
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
