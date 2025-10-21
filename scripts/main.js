import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var averageElm = document.getElementById("average");
var cardContainer = document.getElementById("serie-card");
mostrarSeries(series);
function mostrarSeries(series) {
    var seasonsPromedio = 0;
    var numeroSeries = 0;
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td class=\"text-primary\" style=\"cursor:pointer\">").concat(s.name, "</td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        seriesTbody.appendChild(trElement);
        trElement.children[1].addEventListener("click", function () { return mostrarDetalle(s); });
        seasonsPromedio += s.seasons;
        numeroSeries += 1;
    });
    var avgRow = document.createElement("tr");
    avgRow.innerHTML = "\n    <td colspan=\"4\">Seasons average: ".concat(seasonsPromedio / numeroSeries, "</td>\n    ");
    seriesTbody.appendChild(avgRow);
    ;
}
function mostrarDetalle(serie) {
    cardContainer.innerHTML = "\n    <div class=\"card\">\n      <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.webpage, "\" target=\"_blank\">").concat(serie.webpage, "</a>\n      </div>\n    </div>\n  ");
}
