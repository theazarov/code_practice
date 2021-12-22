'use strict';

let field = document.querySelector('#field');

function build(field, arr){

}

//Удобно было бы, если бы массив, передаваемый в эту функцию был двухмерным, уже специально подготовленным, со случайными числами:
function prepare(size){
    let arr = []

    arr = range(size * size)
    arr = shuffle(arr)
    arr = chunk(arr, size)

    return arr
}

//Пусть вспомогательная функция range формирует массив с числами от 1 до максимального числа таблицы:
function range(count) {
	let arr = []
    for(let i = 1; i <= count; i++){
        arr.push(i)
    }
    return arr
}

//Пусть функция shuffle перемешивает элементы массива в случайном порядке:
function shuffle(arr) {
	let randomArray = []

    while(arr.length > 0){
        let random = getRandomNum(0, arr.length -1)
        let elem = arr.splice(random, 1)[0]
        randomArray.push(elem)
    }
    return randomArray
}

//Получаем случайное число:
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//Пусть функция chunk разбивает одномерный массив в двухмерный. Второй параметр пусть указывает количество элементов в подмассиве:
function chunk(arr, num){
    let twoArray = []

    while(arr.length > 0){
        let elems = arr.splice(0, num)
        twoArray.push(elems)
    }
    return twoArray
}