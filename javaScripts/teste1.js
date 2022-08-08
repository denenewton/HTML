import { data } from "../site-movie/js/data.js";
import * as comp from "../site-movie/js/components.js";

$(document).ready(function () {
    $("#search").focus();
    var page = 1;
    const limit = 4;
  
    comp.paginaCorrente(data, page, limit);

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

    if (results.length === 0) {
      $(".movies").html("<h3>Movie not found in data</h3>");
      $(".changePages").hide();
    }

    if (results.length === data.length) {
      console.log("if d meio");
      comp.movieHtml(comp.paginate(data, 1, 4));
      $(".changePages").show();
    }

    if (results.length > 0 && results.length < data.length * (1 / 1.1)) {
      comp.movieHtml(results);
      $(".changePages").hide();
    }
  });
});
