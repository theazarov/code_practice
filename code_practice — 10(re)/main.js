'use strict';

/*Гороскоп на JavaScript
Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.

Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.*/

let input = document.getElementById('input')
let radios = document.querySelectorAll('input[type="radio"]')
let out = document.getElementById('out')
var signs = [
    {name:'козерог', m:1, d:20},
    {name:'водолей', m:2, d:20},
    {name:'рыбы',    m:3, d:20},
    {name:'овен',    m:4, d:20},
    {name:'телец',   m:5, d:20},
    {name:'близнецы',m:6, d:21},
    {name:'рак',     m:7, d:22},
    {name:'лев',     m:8, d:23},
    {name:'дева',    m:9, d:23},
    {name:'весы',    m:10,d:23},
    {name:'скорпион',m:11,d:22},
    {name:'стрелец', m:12,d:21},
    {name:'козерог', m:13,d:20}
    ]
let once = ['сегодня', 'завтра', 'послезавтра']
let prophecy = ['танцуйте танцы', 'совершайте прогулки по канату', 'все хорошо', 'все хорошо', 'все хорошо', 'кушайте рыбу', 'смотрите по сторонам']

input.addEventListener('keydown', function one(event) {
    let myDate = input.value.split('.').reverse()
    let date = new Date(myDate); //дата рождения
    let myDay = myDate[2] //день рождения
    let myMount = myDate[1] //месяц рождения
    let random = Math.floor(Math.random() * prophecy.length)

    if(event.keyCode == 13){
        for(let radio of radios){
            if(radio.checked){
                out.innerHTML = input.value + ' ваш знак зодиака ' + getSign(myMount, myDay) + ' ' + once[radio.value] + ' ' + prophecy[random]
            }
            
        }
    }
})

function getSign(m, d){
    if(signs[m-1].d <= d){
        return signs[m-1].name
    } else {
        return signs[m-1].name
    }
}