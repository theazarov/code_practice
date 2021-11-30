'use strict';

/*Поиск тегов на JavaScript
Сейчас мы с вами сделаем сайт, который будет помогать определить значение HTML тега. Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега. После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.*/

let input = document.querySelector('input')
let heading = document.getElementById('heading')
let description = document.getElementById('description')

let tag = {
    a:'Создаёт гипертекстовые ссылки.',
    area:'Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. Всегда вложен внутрь элемента <map>.',
    b:'Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.',
    body:'Представляет тело документа (содержимое, не относящееся к метаданным документа).',
    br:'Перенос текста на новую строку.'
}

input.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        for(let key in tag){
            if(input.value == key){
                heading.innerHTML = '<b>' + key + '</b>'
                description.innerHTML = tag[key]
            }
        }
    }
})