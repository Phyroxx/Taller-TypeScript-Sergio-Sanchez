import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const averageElm: HTMLElement = document.getElementById("average")!;
const cardContainer: HTMLElement = document.getElementById("serie-card")!;

mostrarSeries(series);

function mostrarSeries(series: Serie[]): void {
    let seasonsPromedio: number = 0;
    let numeroSeries: number = 0;

    series.forEach(s => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${s.id}</td>
      <td class="text-primary" style="cursor:pointer">${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
    seriesTbody.appendChild(trElement);
    trElement.children[1].addEventListener("click", () => mostrarDetalle(s));

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

function mostrarDetalle(serie: Serie): void {
  cardContainer.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" target="_blank">${serie.webpage}</a>
      </div>
    </div>
  `;
}