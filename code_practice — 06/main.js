'use strict';

/*Экранная клавиатура на JavaScript
Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.*/

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


let table = document.querySelector('table')
let input = document.querySelector('input')
let ru = document.getElementById('ru')
let en = document.getElementById('en')
let j = 0

for(let i = 0; i <= 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 10; j++){
        let td = document.createElement('td')
        td.classList.add('noselect')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

addAlphabet(ru, arr_ru)
addAlphabet(en, arr_en)

myClick(table)

function addAlphabet(button, alphabet){

    button.addEventListener('click', function(event){
        let tds = document.querySelectorAll('td')

        for(let clean of tds){
            clean.innerHTML = ''
        }
        
        for(let i = 0; i < tds.length; i++){
    
            if(num[i] != undefined){
                tds[i].innerHTML = num[i]
            }
    
            if(num[i] == undefined){
                tds[i].innerHTML = alphabet[j]
                j++
            }
    
            if(alphabet[j] == undefined){
                j = 0
                break
            }
        }
    })
}

function myClick(table){
    let tds = table.querySelectorAll('td')

    for(let td of tds){
        td.addEventListener('click', function(){

            input.value += td.innerHTML
            td.classList.add('green')

            setTimeout(()=>{
                td.classList.remove('green')
            }, 100)
        })
    }
}