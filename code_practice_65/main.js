'use strict';

let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

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
    return date.getDay()
}
//console.log(getFirstWeekDay(2021, 11))

//И аналогичную функцию для последнего дня месяца:
function getLastWeekDay(year, month) {
	let date = new Date(year, month+1, 0)
    return date.getDay()
}
//console.log(getLastWeekDay(2021, 11))

let arrDaysThisMount = range(getLastDay(year, month))
console.log(arrDaysThisMount)