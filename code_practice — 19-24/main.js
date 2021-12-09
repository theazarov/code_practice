"use strict";

let input = document.getElementById("input");
let list = document.getElementById("list");

input.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    let li = document.createElement("li");
    let spanText = document.createElement("span");
    spanText.innerHTML = input.value;
    li.appendChild(spanText);
    input.value = "";

    let spanDelete = document.createElement("span");
    spanDelete.innerHTML = " удалить ";
    spanDelete.classList.add("btn");
    li.appendChild(spanDelete);

    let spanDone = document.createElement("span");
    spanDone.innerHTML = " выполнено ";
    spanDone.classList.add("btn");
    li.appendChild(spanDone);

    spanDelete.addEventListener("click", function () {
      spanDelete.parentNode.remove();
    });

    spanDone.addEventListener("click", function () {
      let first = spanDone.parentElement.querySelector("span");
      first.classList.add("done");
    });

    spanText.addEventListener("dblclick", function () {
      let redact = document.createElement("input");
      redact.value = spanText.innerHTML;
      li.prepend(redact);
      spanText.innerHTML = "";

      redact.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
          spanText.innerHTML = redact.value;
          redact.remove();
        }
      });
    });
    list.prepend(li);
  }
});