"use strict";

let table = document.getElementById("field");
let colors = ["red", "green", "blue", "black", "yellow"];

function generateTable(columns, rows, table) {
  let result = document.createElement("p");
  let click = 0;

  for (let i = 0; i < columns; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < rows; j++) {
      let td = document.createElement("td");
      td.classList.add(generateRangomColor(colors, colors.length));

      td.addEventListener("click", function () {
        getNewColor(colors, td);
        getWin(table, td, result, ++click);
      });

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  table.insertAdjacentElement("afterEnd", result);
}
generateTable(4, 4, table);

function generateRangomColor(colors, max) {
  let random = Math.floor(Math.random() * (max - 0)) + 0;
  return colors[random];
}

function getNewColor(colors, td) {
  let color = colors[colors.indexOf(td.classList[0]) + 1];
  colors.indexOf(td.classList[0]) + 1 === colors.length
    ? (color = colors[0])
    : color;

  td.classList.remove(td.classList[0]);
  td.classList.add(color);
}

function getWin(table, td, result, click) {
  let tds = table.querySelectorAll("td");
  let color = colors[colors.indexOf(td.classList[0])];
  let counter = 1;

  for (let td of tds) {
    if (td.classList.contains(color)) {
      counter == tds.length
        ? (result.innerHTML = color + " win")
        : (result.innerHTML =
            "количество кликов - " +
            click +
            ", заполнено ячеек - " +
            counter++);
    }
  }
}