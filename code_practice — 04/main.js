'use strict';

/*Игра угадай число на JavaScript
Сейчас мы с вами реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.

Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.*/

let elem = document.getElementById('elem')
let out = document.getElementById('out')

let random = Math.floor(Math.random() * 101)
let robot = document.createElement('img')
robot.src = 'robot.gif'
robot.classList.add('robot')
elem.insertAdjacentElement("beforebegin", robot)
robot.insertAdjacentHTML('afterend', '<br>')
console.log(random)

elem.addEventListener('keydown', function(event){
    let num = Number(elem.value)
    console.log(num)

    if(event.keyCode == 13){
        if(num == random){
            out.innerHTML = 'you win!'
        }
        if(num > random){
            out.innerHTML = 'попробуйте ввести меньшее число'
        }
        if(num < random){
            out.innerHTML = 'попробуйте ввести число по больше'
        }
        if(isNaN(num)){
            out.innerHTML = 'я робор, я не понимаю буквы'
        }
    }
})