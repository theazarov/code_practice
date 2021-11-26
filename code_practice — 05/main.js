'use strict';

/*Игра угадай ячейку на JavaScript
Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.*/

let table = document.querySelector('table')
let button = document.querySelector('button')
let p = document.querySelector('p')

for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 10; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}


button.addEventListener('click', function play(event){

    let tds = document.querySelectorAll('td')
    let g = 90
    let f = 0

    for(let i = 0; i <= 50; i++){
        let random = Math.floor(Math.random() * 100)
        tds[random].classList.add('yes')
    }


    for(let elem of tds){
        elem.addEventListener('click', function board(){
            if(elem.className == 'yes'){
                elem.classList.remove('yes')
                elem.classList.add('colorGreen')
                f++
                console.log(f)
            } else if(elem.className != 'colorGreen'){
                elem.classList.add('colorRad')
           }
        })
    }

    let timer = setInterval(() =>{
        p.innerHTML = g--

        if(f == 10){
            clearInterval(timer)
            p.innerHTML = 'you win'
            
        }
        if(g == 0){
            p.innerHTML = 'you lose'
            clearInterval(timer)
        }
    }, 1000)

    
    event.stopPropagation()
})