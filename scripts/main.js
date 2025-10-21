import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
renderSeries(series);
function renderSeries(series) {
    var seasonsPromedio = 0;
    var numeroSeries = 0;
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td>").concat(s.name, "</td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        seriesTbody.appendChild(trElement);
        seasonsPromedio += s.seasons;
        numeroSeries += 1;
    });
    var avgRow = document.createElement("tr");
    avgRow.innerHTML = "\n    <td colspan=\"4\">Seasons average: ".concat(seasonsPromedio / numeroSeries, "</td>\n    ");
    seriesTbody.appendChild(avgRow);
    ;
}
