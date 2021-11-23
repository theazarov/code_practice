'use strict';

/*Задача 4js.Pr.St.TA

Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о процентном содержании каждого символа в тексте.*/

let one = document.getElementById('one')

one.addEventListener('blur', function(){
    let arr = one.value.split('').sort()
    let elems = []
    let result = 0


    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i +1]){
            elems.push(arr.splice(0, i+1))
            i = 0
        }
    }
    console.log(elems)

    for(let elem of elems){

        let num = elem.length
        let total = one.value.length
        let percent = num*100/total
        console.log('буква: ', elem[0], 'содержится в ', percent.toFixed(2), '% текста')
        result += Math.round(percent)
    }
})

//var something = 500;
//var total = 1000;
//var 