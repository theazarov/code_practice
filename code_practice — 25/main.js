"use strict";

/*
let text = document.getElementById('text')
let save = text.querySelector('button')
let textarea = text.querySelector('textarea')
let input = text.querySelector('input')

let notes = document.getElementById('notes')

let obj = {}
let j = 1

save.addEventListener('click', function(){
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.innerHTML = (j++) + ' ' + input.value
    li.appendChild(span)
    li.classList.add('new')

    myObject(obj, span.innerHTML, textarea.value)
    notes.appendChild(li)

    input.value = ''
    textarea.value = ''

    li.addEventListener('click', function(){
        textarea.value = obj[span.innerHTML]
        input.value = span.innerHTML

        textarea.readOnly = true
        input.readOnly = true
    })
})

function myObject(obj, heading, write){
    obj[heading] = write
    return obj
}
*/

let texts = [];

let text = document.getElementById("text");
let textarea = text.querySelector("textarea"); //поле для текста
let save = text.querySelector("button"); //кнопка сохранить

let menu = document.getElementById("menu");
let notes = document.getElementById("notes");
let create = document.getElementById("create");
let newEntryButton = create.querySelector("button");

let j = 0;

save.addEventListener("click", function () {
  let mode = this.dataset.mode;

  if (mode == "create") {

    let li = document.createElement("li");
    li.dataset.key = j++;

    let spanOpen = document.createElement("span");
    spanOpen.innerHTML = "Запись " + j;
    spanOpen.classList.add('open')

    let spanRemove = document.createElement("span");
    spanRemove.classList.add('remove')
    spanRemove.innerHTML = 'X '
    li.appendChild(spanRemove)

    spanRemove.addEventListener('click', function(){
        spanRemove.parentNode.remove()
    })

    li.appendChild(spanOpen);
    notes.appendChild(li);
    let lis = notes.querySelectorAll("li");
    let spansOpen = notes.querySelectorAll('.open')

    texts.push(textarea.value);
    textarea.value = "";

    for (let i = 0; i < texts.length; i++) {
      lis[i].addEventListener("click", function () {
        for (let li of lis) {
          li.classList.remove("green");
          this.classList.add("green");

          textarea.value = texts[i];
          save.dataset.mode = "update";

          save.dataset.key = lis[i].dataset.key;
        }
      });
    }
  }

  if (mode == "update") {
    console.log((texts[save.dataset.key] = textarea.value));
  }
});

newEntryButton.addEventListener("click", function () {
  save.dataset.mode = "create";
  let lis = notes.querySelectorAll("li");

  for (let li of lis) {
    li.classList.remove("green");
    textarea.value = "";
  }
});
