'use strict';

let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function () {
    let tr = document.createElement('tr')

    allowEdit(createCell(tr, name.value, 'name'))

    allowEdit(createCell(tr, price.value, 'price'))

    allowEdit(createCell(tr, amount.value, 'amount'))

    createCell(tr, price.value * amount.value, 'cost')

    createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
        this.parentNode.remove()
        recountTotal()
    })

    name.value = ''
    price.value = ''
    amount.value = ''

    table.appendChild(tr)
    recountTotal()
})

function createCell(tr, value, name) {
    let td = document.createElement('td')
    td.innerHTML = value
    td.classList.add(name)
    tr.appendChild(td)

    return td
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost')
    let result = 0

    if (costs) {
        for (let num of costs) {
            result += Number(num.innerHTML)
            total.innerHTML = result
        }
    }
}

function allowEdit(td){
    td.addEventListener('dblclick', function addInput(){
        let input = document.createElement('input')
        input.value = td.innerHTML
        td.innerHTML = ''

        input.addEventListener('keydown', function(event){
            if(event.keyCode == 13){
                td.innerHTML = input.value
                td.addEventListener('dblclick', addInput)
            }
        })

        input.addEventListener('blur', function() {
            td.innerHTML = input.value;
            this.remove() // удалим инпут
            td.addEventListener('dblclick', addInput)
        });
        td.appendChild(input)
        td.removeEventListener('dblclick', addInput)
    })
}