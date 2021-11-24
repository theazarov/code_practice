'use strict';

//Анализатор текста на JavaScript

/*Задача 1js.Pr.St.TA

Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.*/

let elem = document.getElementById('elem')

let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')

elem.addEventListener('blur', function(event){

    //узнаем количество слов
    if(one.checked){
        let result = elem.value.split(' ')
        let p = document.createElement('p')
        p.innerHTML = result.length + ' - слова'

        let oneL = document.getElementById('oneL')
        oneL.insertAdjacentElement('afterEnd', p)

        one.addEventListener('click', function(){
            if(!one.disabled){
                p.remove()
            }
        })
    }

    //узнаем количество символов
    if(two.checked){
        let result = elem.value.split('').join('')
        let p = document.createElement('p')
        p.innerHTML = result.length + ' - символов'

        let twoL = document.getElementById('twoL')
        twoL.insertAdjacentElement('afterEnd', p)

        two.addEventListener('click', function(){
            if(!two.disabled){
                p.remove()
            }
        })
    }

    //узнаем количество символов без пробелов
    if(three.checked){
        let result = elem.value.split(' ').join('')
        let p = document.createElement('p')
        p.innerHTML = result.length + ' символов'

        let threeL = document.getElementById('threeL')
        threeL.insertAdjacentElement('afterEnd', p)

        three.addEventListener('click', function(){
            if(!two.disabled){
                p.remove()
            }
        })
    }

    //узнаем процентное содержание каждого символа
    if(four.checked){
        let str = elem.value.split('')
        let col = {};
        str.forEach(s => col[s] = col[s]+1 || 1);
        
        let p = document.createElement('p')
        let fourL = document.getElementById('fourL')

        for(let key in col){
            let num = col[key]
            let total = str.length
            let percent = num*100/total
            
            p.innerHTML += key + ': ' + percent.toFixed(2) + '%' +'<br>'
        }
        fourL.insertAdjacentElement('afterend', p)
    }
})

/*Задача 3js.Pr.St.TA

Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.*/

/*Задача 3js.Pr.St.TA

Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.*/

/*Задача 4js.Pr.St.TA

Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.*/