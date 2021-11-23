'use strict';

//Математические калькуляторы на JavaScript

/*Задача 2js.Pr.St.MC

Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.*/

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let btnThree = document.getElementById('btnThree')

btnThree.addEventListener('click', function(){
    let arr = [one.value, two.value, three.value]
    arr.sort((a,b) => a < b)
    
    let big = arr.pop()

    if((arr[0] * arr[0]) + (arr[1] * arr[1]) == big * big){
        console.log('квадрат пифагора')
    }
})

/*Задача 3js.Pr.St.MC

Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.*/

let four = document.getElementById('four')
let btnFour = document.getElementById('btnFour')

btnFour.addEventListener('click', function(){
    console.log(four.value)
    for(let i = 0; i < four.value; i++){
        if(four.value % i == 0){
            console.log(i)
        }
    }
})

/*Задача 4js.Pr.St.MC

Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.*/

let five = document.getElementById('five')
let six = document.getElementById('six')
let btnSix = document.getElementById('btnSix')

btnSix.addEventListener('click', function(){
    
    for(let i = 2; i < five.value; i++){
        if(five.value % i == 0 && six.value % i == 0){
            console.log(i)
        }
    }
})

/*Задача 5js.Pr.St.MC

Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.*/

let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let btnEight = document.getElementById('btnEight')

btnEight.addEventListener('click', function(){
    let result = []
    for(let i = 0; i < seven.value; i++){

        if(seven.value % i == 0 && eight.value % i == 0){
            result.push(i)
        }
    }
    console.log(result.pop())
    console.log(result.shift())
})

/*Задача 6js.Pr.St.MC

Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.*/