'use strict';

/*Автодополнение на JavaScript
Сейчас мы с вами реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере. Ниже я сделал инпут, в который можно ввести название страны. При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.

При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте. Для этого, в общем-то, автодополнение и нужно. В примере для простоты я сделал только три страны: Belarus, Belgium и Bulgaria. Введите в приведенный ниже инпут сначала символ 'В' английское, а потом 'e' и посмотрите, что будет:*/

let parent = document.getElementById('parent')
let input = document.getElementById('elem')
let list = document.getElementById('list')
let arr  = ['Belarus', 'Belgium', 'Bulgaria']

input.addEventListener('input', function(){
    let lis = list.querySelectorAll('li')
    
    for(let elem of lis){
        list.removeChild(elem)
    }

    let cleanArr = arr.filter(function(el){
        if(el.startsWith(input.value)){
            return true
        } else {
            return false
        }
    })

    for(let elem of cleanArr){
        let li = document.createElement('li')
        li.innerHTML = elem
        list.appendChild(li)

        li.addEventListener('click', function(){
            input.value = li.innerHTML
            list.innerHTML = ''
        })
    }
})