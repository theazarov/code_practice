"use strict";

let field = document.querySelector("#field");
let size = 2;

//Пусть вспомогательная функция range формирует массив с числами от 1 до максимального числа таблицы:
function range(count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}

//Получаем случайное число:
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Пусть функция shuffle перемешивает элементы массива в случайном порядке:
function shuffle(arr) {
  let randomArray = [];

  while (arr.length > 0) {
    let random = getRandomNum(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    randomArray.push(elem);
  }
  return randomArray;
}

//Пусть функция chunk разбивает одномерный массив в двухмерный. Второй параметр пусть указывает количество элементов в подмассиве:
function chunk(arr, num) {
  let twoArray = [];

  while (arr.length > 0) {
    let elems = arr.splice(0, num);
    twoArray.push(elems);
  }
  return twoArray;
}

//Удобно было бы, если бы массив, передаваемый в эту функцию был двухмерным, уже специально подготовленным, со случайными числами:
function prepare(size) {
  let arr = [];

  arr = range(size * size);
  arr = shuffle(arr);
  arr = chunk(arr, size);

  return arr;
}

//Наша функция build будет формировать ячейки таблицы, заполняя их числами из массива:
function build(field, arr) {
  field.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < arr.length; j++) {
      let td = document.createElement("td");
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    }
    field.appendChild(tr);
  }
  return field.querySelectorAll("td");
}

//Давайте возьмем этот массив, переберем его циклом и активируем каждую ячейку. Под активацией я понимаю то, что каждая ячейка будет принимать красный фон при клике на нее:
function activate(cells, size) {
  let counter = 1;
  let last = size * size;

  for (let td of cells) {
    td.addEventListener("click", function () {
      if (this.innerHTML == counter) {
        this.classList.add("active");
        counter == last ? start(++size) : counter++;
      }
    });
  }
}

//Функция для запуска игры:
function start(size) {
  activate(build(field, prepare(size)), size);
}
start(size);