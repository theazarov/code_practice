'use strict';

/*Спойлер на JavaScript
Сейчас мы с вами научимся делать спойлеры. Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.

В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер:*/

let add = document.querySelectorAll('.toggle')
let spoiler = document.querySelectorAll('.spoiler')

for(let a of add){
    let text = a.parentElement
    let p = text.nextSibling
    let next = p.nextElementSibling

    a.addEventListener('click', function(){
        next.classList.toggle('active')
    })
}