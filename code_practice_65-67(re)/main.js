'use strict';

//Календарь на JavaScript:
let calendar = document.querySelector('#calendar')
let body = document.querySelector('.body')
let table = document.getElementById('table')

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()

let lastDay = getLastDay(year, month)

let arrDaysThisMonth = range(lastDay)

let lastWeekDay = getLastWeekDay(year, month)

let firstWeekDay = getFirstWeekDay(year, month)

let arrNormalize = normalize(arrDaysThisMonth, firstWeekDay, 6 - lastWeekDay)
let arrTwoDimensionalArr = chunk(arrNormalize, 7)

//Начнем с того, что сделаем функцию, которая параметром будет принимать целое число и создавать массив чисел от 1 до этого числа:
function range(days){
    let arrDaysThisMonth = []

    for(let i = 1; i <= days; i++){
        arrDaysThisMonth.push(i)
    }
    return arrDaysThisMonth
}
//console.log(range(getLastDay(year, month)))

//Также нам понадобится функция, которая будет возвращать номер последнего дня месяца:
function getLastDay(year, month){
    let date = new Date(year, month +1, 0)
    return date.getDate()
}
//console.log(getLastDay(year, month))

//Давайте теперь сделаем функцию, которая будет получать номер для недели первого дня месяца:
function getFirstWeekDay(year, month){
    let date = new Date(year, month)
    return date.getDay() -1
}
//console.log(getFirstWeekDay(year, month))

//И аналогичную функцию для последнего дня месяца:
function getLastWeekDay(year, month){
    let date = new Date(year, month +1, 0)
    return date.getDay() -1
}
//console.log(getLastWeekDay(year, month))

//Давайте теперь дополним наш массив пустыми строками справа и слева. Пусть дня этого у нас будет функция normalize, первым параметром принимающая массив, вторым - сколько пустых строк добавить слева, а третьим - сколько пустых строк справа:
function normalize(arr, firstDay, lastDay){
    let i = 0
    let j = 0

    while(i < firstDay){
        arr.unshift('')
        i++
    }

    while(j < lastDay){
        arr.push('')
        j++
    }
    return arr
}

//В предыдущем уроке мы с вами сделали массив, заполненный справа и слева пустыми строками. Давайте теперь разобьем этот массив в двухмерный. Сделаем для этого следующую функцию chunk:
function chunk(arr, num){
    let result = []
    
    while(arr.length > 0){
        let elems = arr.splice(0, num)
        result.push(elems)
    }
    return result
}

function createTable(table, arr){

    for(let i = 0; i < arr.length; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j < arr[i].length; j++){
            let td = document.createElement('td')
            td.innerHTML = arr[i][j]
            console.log(arr[i][j])
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return console.log('hi')
}
createTable(table, arrTwoDimensionalArr)
console.log(table, arrTwoDimensionalArr)