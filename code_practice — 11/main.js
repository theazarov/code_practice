'use strict';

/*Сайт предсказаний на JavaScript
Сейчас мы с вами сделаем сайт, который будет выдавать предсказания. Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.

Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.*/

let parent = document.getElementById('parent')
let timer = document.getElementById('timer')
let text = document.getElementById('text')
let start = document.getElementById('start')
let stop = document.getElementById('stop')

let good = ['все прекрасно', 'все еще лучше', 'даже очень хорошо', 'у тебя будет гуд морнинг']
let bad = ['кончится бумага', 'забудешь сдачу', 'будет большая очередь', 'туалет будет занят']
let arr = [good, bad]

start.addEventListener('click', function(){
    let random;
    let bad_good = random = Math.floor(Math.random() * 2)

    let myTimer = setInterval(function(){
        random = Math.floor(Math.random() * 3)

        timer.innerHTML = random
    }, 100)

    start.classList.remove('active')
    stop.classList.add('active') 

    stop.addEventListener('click', function(){
        clearInterval(myTimer)
        stop.classList.remove('active')

        if(bad_good == 0){
            text.classList.add('green')
        } else {
            text.classList.add('rad')
        }
        text.innerHTML = arr[bad_good][random]
    })
})