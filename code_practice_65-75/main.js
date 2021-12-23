'use strict';

let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let table = document.getElementById('table')

//Начнем с того, что сделаем функцию, которая параметром будет принимать целое число и создавать массив чисел от 1 до этого числа:
function range(count) {
	let arrMount = []

    for(let i = 1; i <= count; i++){
        arrMount.push(i)
    }
    return arrMount
}
//console.log(range(31))

//Также нам понадобится функция, которая будет возвращать номер последнего дня месяца:
function getLastDay(year, month) {
	let date = new Date(year, month+1, 0)
    return date.getDate()
}
//console.log(getLastDay(2021, 11))

//Давайте теперь сделаем функцию, которая будет получать номер для недели первого дня месяца:
function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 0)
    return date.getDay()+1
}
//console.log(getFirstWeekDay(2021, 11))

//И аналогичную функцию для последнего дня месяца:
function getLastWeekDay(year, month) {
	let date = new Date(year, month+1, 0)
    return date.getDay() -1
}
//console.log(getLastWeekDay(2021, 11))

//Давайте теперь дополним наш массив пустыми строками справа и слева. Пусть дня этого у нас будет функция normalize, первым параметром принимающая массив, вторым - сколько пустых строк добавить слева, а третьим - сколько пустых строк справа:
function normalize(arr, left, right) {
    let i = 1
    let j = 0
	
    while(i < left){
        arr.unshift('')
        i++
    }

    while(j < right){
        arr.push('')
        j++
    }   
    return arr 
}

//В предыдущем уроке мы с вами сделали массив, заполненный справа и слева пустыми строками. Давайте теперь разобьем этот массив в двухмерный. Сделаем для этого следующую функцию chunk:
function chunk(arr, num) {
    let twoArray = [];
  
    while (arr.length > 0) {
      let elems = arr.splice(0, num);
      twoArray.push(elems);
    }
    return twoArray;
  }

  //Давайте теперь сделаем функцию createTable, первым параметром принимающую ссылку на родительский элемент чисел календаря (в нашем случае это будет tbody), а вторым - двухмерный массив:
  function build(field, arr) {
    field.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
      let tr = document.createElement("tr");
  
      for (let j = 0; j < arr[i].length; j++) {
        let td = document.createElement("td");
        td.innerHTML = arr[i][j];
        tr.appendChild(td);
      }
      field.appendChild(tr);
    }
  }

//Обернем код формирования календаря в функцию:
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	build(body, nums)
}

let months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']
let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
let info = document.querySelector('.info')
info.innerHTML = year + ' ' + months[month]

draw(body, year, month)

let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');



next.addEventListener('click', function() {

    let nextMount = new Date(year, ++month)
    info.innerHTML = nextMount.getFullYear() + ' ' + months[nextMount.getMonth()]
	draw(body, year, month);

});

prev.addEventListener('click', function() {

    let prevMount = new Date(year, --month)
    info.innerHTML = prevMount.getFullYear() + ' ' + months[prevMount.getMonth()]
	draw(body, year, month);

});