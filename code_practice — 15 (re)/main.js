'use strict';

let tabs = document.querySelectorAll('.tab')
console.log(tabs)

for(let tab of tabs){
    let a = tab.querySelector('a')
    let text = tab.querySelector('p')

    a.addEventListener('click', function(){
        for(let elem of tabs){
            elem.classList.remove('active')
        }
        tab.classList.add('active')
    })

    text.addEventListener('click', function tx(){
        let input = document.createElement('textarea')
        input.value = text.innerHTML
        text.innerHTML = ''

        text.appendChild(input)
        text.removeEventListener('click', tx)
        input.focus()

        input.addEventListener('blur', function(){
            text.innerHTML = input.value
            input.value = ''
            text.addEventListener('click', tx)
            input.blur()
        })
    })
}
