'use strict';

//Калькуляторы фигур на JavaScript

/*Задача 1js.Pr.St.FC

Сделайте калькулятор, который будет находить площадь и периметр квадрата.*/

let one = document.getElementById('one')
let outOne = document.getElementById('outOne')
let btnOne = document.getElementById('btnOne')

btnOne.addEventListener('click', function(){
    outOne.innerHTML = 'площадь квадрата' + (one.value ** 2) + '<br>' + 'периметр квадрата' + (one.value * 4)
})

/*Задача 2js.Pr.St.FC

Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.*/

let two = document.getElementById('two')
let twoVl = document.getElementById('twoVl')
let outTwo = document.getElementById('outTwo')
let btnTwo = document.getElementById('btnTwo')

btnTwo.addEventListener('click', function(){
    outTwo.innerHTML = 'площадь прямоугольника' + (two.value * twoVl.value) + '<br>' + 'периметр прямоугольника' + (two.value * 2 + twoVl.value * 2)
})

/*Задача 3js.Pr.St.FC

Сделайте калькулятор, который будет находить площадь круга и длину окружности.*/

let three = document.getElementById('three')
let outThree = document.getElementById('outThree')
let btnThree = document.getElementById('btnThree')

btnThree.addEventListener('click', function(){
    outThree.innerHTML = 'площадь круга' + (Math.PI * three.value * three.value) + '<br>' + 'периметр круга' + (2 * Math.PI * three.value)
})

/*Задача 4js.Pr.St.FC

Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.*/

let four = document.querySelectorAll('.four')
let outFour = document.getElementById('outFour')
let btnFour = document.getElementById('btnFour')

btnFour.addEventListener('click', function(){
    let result = 0

    for(let elem of four){
        result += Number(elem.value)
    }
    outFour.innerHTML = 'периметр треугольника' + result
})