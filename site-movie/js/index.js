import { dataMovies } from "./data.js";
import * as component from "./components.js";

var data = await dataMovies();

$(document).ready(async function () {
  $("#search").focus();
  var page = 1;
  const limit = 4;

  component.paginaCorrente(data, page, limit);

  $("#search").change(function () {
    $(".changePages").hide();
    $(".movies").html("");

    let termo = this.value;
    let expressaoReg = new RegExp(termo.trim(), "i");

    const results = data.filter((elem) => {
      return expressaoReg.test(elem.name);
    });

    $(".changePages").hide(); // ocultar o link nextPage

    if (results.length === 0) {
      $(".movies").html("<h3 id='not-found'>Movie not found in data</h3>");
      $("#search").val("");
    }
    if (results.length === data.length) {
      component.movieHtml(component.paginate(data, 1, 3));
      $(".changePages").show();
    }
    if (results.length < data.length && results.length > 0) {
      component.movieHtml(results);
      $("#search").val("");
    }
  });
});
