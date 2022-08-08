import { data } from "./data.js";
import * as component from "./components.js";

$(document).ready(function () {
  $("#search").focus();
  var page = 1;
  const limit = 4;

  component.paginaCorrente(data, page, limit);

  $("#search").change(function () {
    $(".movies").html("");

    let termo = this.value;
    let expressaoReg = RegExp(termo.trim(), "i");

    console.log(expressaoReg);
    
    $(".changePages").hide(); // ocultar o link nextPage
    const results = data.filter((elem) => {
      if (expressaoReg.test(elem.name)) return elem;
      else return;
    });

    $(".changePages").hide(); // ocultar o link nextPage

    if (results.length === 0) {
      $(".movies").html("<h3>Movie not found in data</h3>");
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
