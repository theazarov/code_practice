'use strict';

//Аккордион на JavaScript

let links = document.querySelectorAll('.link')
let tabs = document.querySelectorAll('.tab')
console.log

for(let i = 0; i < links.length; i++){

    links[i].addEventListener('click', function(){
        for(let tab of tabs){
            tab.classList.remove('active')
        }
        tabs[i].classList.add('active')
    })
}