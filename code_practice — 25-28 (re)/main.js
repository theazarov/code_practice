'use strict';

//Записная книжка на JavaScript

let text = document.getElementById('text')
let save = text.querySelector('button')
let textarea = text.querySelector('textarea')

let menu = document.getElementById('menu')
let notes = document.getElementById('notes')

let create = document.getElementById('create')
let newEntry = create.querySelector('button')

let texts = []
let counter = 1

save.addEventListener('click', function addLi(event) {

    if (save.dataset.mode == 'create') {
        let li = document.createElement('li')
        li.dataset.key = counter++

        let spanNote = document.createElement('span')
        spanNote.innerHTML = 'Запись ' + li.dataset.key

        let spanDelete = document.createElement('span')
        spanDelete.innerHTML = '[X]'
        spanDelete.classList.add('red')

        let spanPreview = document.createElement('span')
        let preview = textarea.value.slice(0, 10) + '...'
        spanPreview.innerHTML = preview
        let br = document.createElement('br')

        li.appendChild(spanNote)
        li.appendChild(spanDelete)
        li.appendChild(br)
        li.appendChild(spanPreview)
        notes.appendChild(li)

        texts.push(textarea.value)
        textarea.value = ''

        spanDelete.addEventListener('click', function () {
            spanDelete.parentNode.remove()
        })

        li.addEventListener('click', function () {
            textarea.value = texts[li.dataset.key - 1]
            save.dataset.mode = 'update'
            save.dataset.key = li.dataset.key
        })
    }

    if (save.dataset.mode == 'update') {
        texts[save.dataset.key - 1] = textarea.value
        textarea.value = ''
    }

})

newEntry.addEventListener('click', function () {
    textarea.value = ''
    save.dataset.mode = 'create'
})