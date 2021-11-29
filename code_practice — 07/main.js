'use strict';

/*Задача 1js.Pr.St.LC

Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.*/

/*Задача 2js.Pr.St.LC

Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.*/

let calendar = document.getElementById('calendar')
let date = new Date()
let thisDate = new Date(2021, 11, 0)
let mounts = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']
let out = document.createElement('p')
let forward = document.createElement('a') //вперед
forward.href = '#'
forward.innerHTML = ' следующий месяц →'

let backward = document.createElement('a') //назад
backward.href = '#'
backward.innerHTML = '← предыдущий месяц '

out.innerHTML = mounts[date.getMonth()] + ' ' + date.getFullYear() + 'г.'
calendar.insertAdjacentElement('beforebegin', out)
out.insertAdjacentElement('beforebegin',forward)
out.insertAdjacentElement('afterend', backward)

for(let i = 1; i <= thisDate.getDate(); i++){
    let li = document.createElement('li')
    li.innerHTML = i

    if(i == date.getDate()){
        
        li.classList.add('colorGreen')
    }
    calendar.appendChild(li)
}

let j = thisDate.getMonth()
forward.addEventListener('click', function(){
    thisDate = new Date(2021, j++, 0)
    
    let lis = calendar.querySelectorAll('li')
    for(let li of lis){
        li.remove()
    }

    out.innerHTML = mounts[thisDate.getMonth()] + ' ' + thisDate.getFullYear() + 'г.'

    for(let i = 1; i <= thisDate.getDate(); i++){
        let li = document.createElement('li')
        li.innerHTML = i
    
        if(i == date.getDate()){
            
            li.classList.add('colorGreen')
        }
        calendar.appendChild(li)
    }


})