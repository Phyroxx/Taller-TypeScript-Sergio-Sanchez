import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;

renderSeries(series);

function renderSeries(series: Serie[]): void {
    let seasonsPromedio: number = 0;
    let numeroSeries: number = 0;

    series.forEach(s => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    seriesTbody.appendChild(trElement);

    seasonsPromedio += s.seasons;
    numeroSeries += 1;
  })
    const avgRow = document.createElement("tr");
     avgRow.innerHTML = `
    <td colspan="4">Seasons average: ${seasonsPromedio/numeroSeries}</td>
    `;
    seriesTbody.appendChild(avgRow);
  ;
}