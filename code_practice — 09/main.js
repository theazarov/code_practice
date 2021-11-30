'use strict';

/*Поиск исторических события на JavaScript
Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы хотим видеть дату, название и описание события. Давайте я покажу вам образец того, что должно получится (для простоты я сделал события за 2000, 2001 и 2002 годы):*/

let parent = document.getElementById('parent')
let input = document.getElementById('input')
let table = document.getElementById('table')

let incident = {
    2000: [{
        date:'21.03.2000',
        name:'прилетел самолет',
        text:'прилёт самолета на поле в молочанове'
    },
    {
        date:'09.10.2000',
        name:'улетел самолет',
        text:'улёт самолета с поля в молочанове'
    }],

    2001: [{
        date:'24.07.2001',
        name:'прилетел вертолет',
        text:'прилёт вертолета на поле в молочанове'
    },
    {
        date:'01.12.2001',
        name:'улетел вертолет',
        text:'улёт вертолета с поля в молочанове'
    }]
}

input.addEventListener('keydown', function(event){
    let year = input.value

    if(event.keyCode == 13){

        if(incident[year]){

            for(let key in incident[year]){
                let tr = document.createElement('tr')

                for(let elem in incident[year][key]){
                    let td = document.createElement('td')
                    td.innerHTML = incident[year][key][elem]
                    tr.appendChild(td)

                    td.addEventListener('click', function editElem(){
                        let edit = document.createElement('input')
                        edit.value = td.innerHTML
                        td.innerHTML = ''
                        td.appendChild(edit)
                        td.removeEventListener('click', editElem)

                        edit.addEventListener('blur', function(){
                            td.innerHTML = edit.value
                            elem = edit.value
                            edit.value = ''
                            td.addEventListener('click', editElem)
                        })
                    })
                }
                table.appendChild(tr)
            }
        }
    }
})