'use strict';

let parent = document.getElementById('parent')
let input = document.getElementById('input')
let myTable = document.getElementById('table')
let separator = document.getElementById('separator')
let myHotkey = document.getElementById('hotkey')
let ru = document.getElementById('ru')
let en = document.getElementById('en')
let out = document.getElementById('out')
let space = document.getElementById('space')

let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я']

let arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я']

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let keys = ['enter', 'clean', 'delete', 'caps lock']
let whitespace = ['space']
let switcher = 0

function generatingTable(arr, id, elem, after, height, width, language){
    let old = document.getElementById(id)
    old.remove()

    let table = document.createElement(elem)
    table.classList.add(language)
    table.classList.add('noselect')
    table.id = id

    let k = 0
    for(let i = 0; i <= height; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j <= width; j++){
            let td = document.createElement('td')
            td.innerHTML = arr[k]

            if(arr[k] == undefined){
                break
            }
            k++
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    let tds = table.querySelectorAll('td')

    for(let td of tds){
        td.addEventListener('mousemove', function(){
            td.classList.add('gray')
        })
        td.addEventListener('mouseout', function(){
            td.classList.remove('gray')
        })
    }
    after.insertAdjacentElement('afterEnd', table)
}

ru.addEventListener('click', function(){
    generatingTable(arr_ru, 'table', 'table', input, 4, 10, 'russian')
    generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'russian')
    generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'russian')

    addLetter()
    getHotkey()
    addSpace()
})

en.addEventListener('click', function(){
    generatingTable(arr_en, 'table', 'table', input, 4, 10, 'english')
    generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'english')
    generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'english')

    addLetter()
    getHotkey()
    addSpace()
})

function addLetter(){
    let table = document.getElementById('table')
    let tds = table.querySelectorAll('td')
    
    for(let td of tds){
        td.addEventListener('click', function(){
            input.value += td.innerHTML
        })
    }
}

function getHotkey(){
    let hotkey = document.getElementById('hotkey')
    let hotkeys = hotkey.querySelectorAll('td')

    for(let key of hotkeys){
        key.addEventListener('click', function(){

            if(key.innerHTML == 'enter'){
                out.innerHTML = input.value
                input.value = ''
            }

            if(key.innerHTML == 'clean'){
                out.innerHTML = ''
                input.value = ''
            }

            if(key.innerHTML == 'delete'){
                let arr = input.value.split('')
                arr.pop()
                input.value = arr.join('')
            }

            //capslock

            if(key.innerHTML == 'caps lock' && hotkey.classList.contains('russian') && switcher == 0){
                generatingTable(arr_RU, 'table', 'table', input, 4, 10, 'russian')
                generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'russian')
                generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'russian')
            
                addLetter()
                getHotkey()
                addSpace()

                switcher = 1
                return
            }

            if(key.innerHTML == 'caps lock' && hotkey.classList.contains('russian') && switcher == 1){
                generatingTable(arr_ru, 'table', 'table', input, 4, 10, 'russian')
                generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'russian')
                generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'russian')
            
                addLetter()
                getHotkey()
                addSpace()

                switcher = 0
                return
            }

            if(key.innerHTML == 'caps lock' && hotkey.classList.contains('english') && switcher == 0){
                generatingTable(arr_EN, 'table', 'table', input, 4, 10, 'english')
                generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'english')
                generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'english')
            
                addLetter()
                getHotkey()
                addSpace()

                switcher = 1
                return
            }

            if(key.innerHTML == 'caps lock' && hotkey.classList.contains('english') && switcher == 1){
                generatingTable(arr_en, 'table', 'table', input, 4, 10, 'english')
                generatingTable(keys, 'hotkey', 'table', separator, 1, 4, 'english')
                generatingTable(whitespace, 'space', 'table', separator, 1, 1, 'english')
            
                addLetter()
                getHotkey()
                addSpace()

                switcher = 0
                return
            }
        })
    }
}

function addSpace(){
    let spaces = document.getElementById('space')
    let space = spaces.querySelectorAll('td')

    for(let key of space){
        key.addEventListener('click', function(){
            input.value += ' '
        })
    }
}