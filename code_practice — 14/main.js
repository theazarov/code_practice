'use strict';
let menu = document.querySelector('.menu') //получаем див меню
let a = menu.querySelectorAll('a') //получаем ссылки с дива
console.log(a)

let tabs = document.querySelector('.tabs') //получаем див с таблицами
let tab = tabs.querySelectorAll('div') //получаем див'ы таблиц
console.log(tab)

for(let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function(){
        console.log('hi')
        for(let j = 0; j < a.length; j++){
            a[j].classList.remove('active')
            tab[j].classList.remove('active')
        }

        a[i].classList.add('active')
        tab[i].classList.add('active')
    })
}