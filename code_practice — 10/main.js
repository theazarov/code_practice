'use strict';

/*Гороскоп на JavaScript
Сейчас мы с вами реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня. Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.

Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день. Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.*/

let input = document.getElementById('input')
let out = document.getElementById('out')
let radios = document.querySelectorAll('input[type="radio"]')
let zodiac = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Змееносец', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы']
let prediction = {
    0:[
        {
            1:'1 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    1:[
        {
            1:'2 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    2:[
        {
            1:'3 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    3:[
        {
            1:'4 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    4:[
        {
            1:'5 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    5:[
        {
            1:'6 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    6:[
        {
            1:'7 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    7:[
        {
            1:'8 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    8:[
        {
            1:'9 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    9:[
        {
            1:'10 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    10:[
        {
            1:'11 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ],
    11:[
        {
            1:'12 сегодня хороший день',
            2:'завтра хороший день',
            3:'слишком далеко смотришь'
        }
    ]
}

console.log(radios)

input.addEventListener('keydown', function(event){
    let myBD = input.value.split('.').reverse()
    let date = new Date(myBD)
    let den = date.getDay()

    if(event.keyCode == 13){

        if(prediction[date.getMonth()]){

            for(let day in prediction[date.getMonth()]){
                let result;

                for(let radio of radios){
                    if(radio.checked){
                        result = radio.value
                    }
                }
                for(let elem in prediction[date.getMonth()][day]){
                    if(elem == result){
                        switch (date.getMonth()+1) {
                            case 1:
                                if (den <= 19)
                                    out.innerHTML = 'Козерог' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Водолей' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 2:
                                if (den <= 18)
                                    out.innerHTML = 'Водолей' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Рыбы' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 3:
                                if (den <= 20)
                                    out.innerHTML = 'Рыбы' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Овен' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 4:
                                if (den <= 19)
                                    out.innerHTML = 'Овен' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Телец' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 5:
                                if (den <= 20)
                                    out.innerHTML = 'Телец' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Близнецы' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 6:
                                if (den <= 21)
                                    out.innerHTML = 'Близнецы' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Рак' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 7:
                                if (den <= 22)
                                    out.innerHTML = 'Рак' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Лев' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 8:
                                if (den <= 22)
                                    out.innerHTML = 'Лев' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Дева' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 9:
                                if (den <= 22)
                                    out.innerHTML = 'Дева' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Весы' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 10:
                                if (den <= 22)
                                    out.innerHTML = 'Весы' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Скорпион' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 11:
                                if (den <= 22)
                                    out.innerHTML = 'Скорпион' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Стрелец' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                            case 12:
                                if (den <= 21)
                                    out.innerHTML = 'Стрелец' + ': ' + prediction[date.getMonth()][day][elem];
                                else
                                    out.innerHTML = 'Козерог' + ': ' + prediction[date.getMonth()][day][elem];
                                break;
                        }
                    }
                }
            }
        }
    }
})

input.addEventListener('focus', () =>{input.value = ''})