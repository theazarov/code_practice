'use strict';

/*Экранная клавиатура на JavaScript
Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.*/

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']

let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я']

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let keys = ['clean', 'delete', 'caps lock']

let table = document.querySelector('table')
let keysTable = document.querySelector('.keys')
let input = document.querySelector('input')
let ru = document.getElementById('ru')
let en = document.getElementById('en')
let relay = 0

newTable(4, 10, table)
newTable(0, keys.length, keysTable)

addAlphabet(ru, arr_ru, table, 'russian', 'english')
addAlphabet(en, arr_en, table, 'english', 'russian')

myClick(table, input)


function addAlphabet(button, alphabet, parent, lang, delLang){

    button.addEventListener('click', function(){
        let tds = parent.querySelectorAll('td')
        parent.classList.add(lang)
        parent.classList.remove(delLang)

        for(let clean of tds){
            clean.innerHTML = ''
        }
        
        for(let i = 0; i < tds.length; i++){
    
            if(num[i] != undefined){
                tds[i].innerHTML = num[i]
            }
    
            if(num[i] == undefined){
                tds[i].innerHTML = alphabet[relay]
                relay++
            }
    
            if(alphabet[relay] == undefined){
                relay = 0
                break
            }

        }

        if(table.classList.contains('russian')){
            addAlphabet(caps, arr_RU, table, 'russian', 'english')

            caps.addEventListener('click', function(){
                addAlphabet(caps, arr_ru, table, 'russian', 'english')
            })
        }

        if(table.classList.contains('english')){
            addAlphabet(caps, arr_EN, table, 'english', 'russian')

            caps.addEventListener('click', function(){
                addAlphabet(caps, arr_en, table, 'english', 'russian')
            })
        }
    })
}

function myClick(parent, out){
    let tds = parent.querySelectorAll('td')

    for(let td of tds){
        td.addEventListener('click', function(){

            out.value += td.innerHTML
            td.classList.add('green')

            setTimeout(()=>{
                td.classList.remove('green')
            }, 100)
        })
    }
}

function newTable(tr, td, elem){
    for(let i = 0; i <= tr; i++){
        let tr = document.createElement('tr')
    
        for(let j = 0; j < td; j++){
            let td = document.createElement('td')
            td.classList.add('noselect')
            tr.appendChild(td)
        }
        elem.appendChild(tr)
    }
}

let keysTd = keysTable.querySelectorAll('td')
let caps = keysTd[keysTd.length -1]

for(let i = 0; i < keysTd.length; i++){
    
    keysTd[i].innerHTML = keys[i]

    keysTd[i].addEventListener('click', function(){
        
        if(keysTd[i].innerHTML == 'delete'){
            let cut = input.value.split('')
            cut.pop()
            input.value = cut.join('')

            keysTd[i].classList.add('green')

            setTimeout(()=>{
                keysTd[i].classList.remove('green')
            }, 100)
        }

        if(keysTd[i].innerHTML == 'clean'){
            input.value = ''

            keysTd[i].classList.add('green')

            setTimeout(()=>{
                keysTd[i].classList.remove('green')
            }, 100)
        }
    })
}
