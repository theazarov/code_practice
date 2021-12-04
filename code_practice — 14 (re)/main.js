'use strict';

let menu = document.querySelector('.menu')
let a = menu.querySelectorAll('a')

let tabs = document.querySelector('.tabs')
let tab = tabs.querySelectorAll('.tab')

for(let i = 0; i < a.length; i++){

    a[i].addEventListener('click', function(){

        for(let j = 0; j < a.length; j++){
            a[j].classList.remove('active')
            tab[j].classList.remove('active')
        }

        a[i].classList.add('active')
        tab[i].classList.add('active')
    })
}