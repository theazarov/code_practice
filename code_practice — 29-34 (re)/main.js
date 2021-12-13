"use strict";

let parent = document.getElementById("parent");
let name = document.getElementById("name");
let price = document.getElementById("price");
let amount = document.getElementById("amount");
let add = document.getElementById("add");
let table = document.getElementById("table");
let total = document.getElementById("total");

add.addEventListener("click", function () {
  let tr = document.createElement("tr");

  allowEdit(createCell(tr, name.value, "name"));
  allowEdit(createCell(tr, price.value, "price"));
  allowEdit(createCell(tr, amount.value, "amount"));
  createCell(tr, price.value * amount.value, "cost");
  let remove = createCell(tr, "удалить", "remove");

  table.appendChild(tr);

  remove.addEventListener("click", function () {
    remove.parentNode.remove();
    total.innerHTML = 0;
    recountTotal(".cost");
  });

  recountTotal(".cost");
});

function createCell(tr, value, name) {
  let td = document.createElement("td");

  td.innerHTML = value;
  td.classList.add(name);
  tr.appendChild(td);

  return td;
}

function recountTotal(name) {
  let costs = table.querySelectorAll(name);
  let result = 0;

  if (costs) {
    for (let elem of costs) {
      result += Number(elem.innerHTML);
      total.innerHTML = result;
    }
  }
  return result;
}

function allowEdit(td) {
  td.addEventListener("dblclick", function edit() {
    let input = document.createElement("input");
    input.value = td.innerHTML;
    td.innerHTML = "";
    input.focus();

    input.addEventListener("keydown", function (event) {
      if (event.keyCode == 13) {
        td.innerHTML = input.value;
        input.remove();
        //recountTotal(".cost");
        td.addEventListener("dblclick", edit);

        if (td.classList.contains("price")) {
          total.innerHTML = input.value * re(".amount");
        }
        if (td.classList.contains("amount")) {
          total.innerHTML = input.value * re(".price");
        }
      }
    });
    td.appendChild(input);

    td.removeEventListener("dblclick", edit);
  });
}

function re(name) {
  let elems = table.querySelectorAll(name);
  let result = 0;

  if (elems) {
    for (let elem of elems) {
      result += Number(elem.innerHTML);
    }
  }
  return result;
}
