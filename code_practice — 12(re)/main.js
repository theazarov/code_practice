'use strict';

/*Автодополнение на JavaScript
Сейчас мы с вами реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере. Ниже я сделал инпут, в который можно ввести название страны. При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.

При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте. Для этого, в общем-то, автодополнение и нужно. В примере для простоты я сделал только три страны: Belarus, Belgium и Bulgaria. Введите в приведенный ниже инпут сначала символ 'В' английское, а потом 'e' и посмотрите, что будет:*/

let parent = document.getElementById('parent')
let input = document.getElementById('input')
let list = document.getElementById('list')
let arr  = ['Belarus', 'Belgium', 'Bulgaria']

input.addEventListener('input', function(){
    list.innerHTML = ''
    let clean = arr.filter((elem)=>elem.startsWith(input.value))
    
    for(let elem of clean){
        let li = document.createElement('li')
        li.innerHTML = elem
        list.appendChild(li)
    }
})