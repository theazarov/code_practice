'use strict';

let text = document.getElementById('text')
let save = text.querySelector('button')
let textarea = text.querySelector('textarea')

let notes = document.getElementById('notes')

let create = document.getElementById('create')
let newEntry = create.querySelector('button')

let memory = []
let counter = 1

save.addEventListener('click', function () {

    if (save.dataset.mode == 'create') {

        let li = document.createElement('li')
        li.dataset.key = counter
        let spanNote = document.createElement('span')
        spanNote.innerHTML = 'Запись ' + (counter++) + ' '
        li.appendChild(spanNote)
        notes.appendChild(li)

        let spanDelete = document.createElement('span')
        spanDelete.dataset.delete = 'delete'
        spanDelete.id = 'delete'
        spanDelete.innerHTML = '[X]'
        li.appendChild(spanDelete)

        let br = document.createElement('br')
        li.appendChild(br)

        let spanPreview = document.createElement('span')
        spanPreview.dataset.key = li.dataset.key
        spanPreview.innerHTML = textarea.value.slice(0, 10) + '...'
        li.appendChild(spanPreview)

        memory.push(textarea.value)
        textarea.value = ''

        li.addEventListener('click', function (event) {
            save.dataset.mode = 'update'
            save.dataset.key = li.dataset.key

            if (event.target.dataset.delete == 'delete') {
                textarea.value = ''
                save.dataset.mode = 'create'
                li.remove()
            } else {
                textarea.value = memory[li.dataset.key - 1]

                let lis = notes.querySelectorAll('li')

                for (let colorize of lis) {
                    colorize.classList.remove('green')
                    li.classList.add('green')
                }
            }
        })
    }

    if (save.dataset.mode == 'update') {

        let spansPreview = notes.querySelectorAll('span')

        for (let span of spansPreview) {
            if (span.dataset.key == save.dataset.key) {
                span.innerHTML = textarea.value.slice(0, 10) + '...'
            }
        }

        memory[save.dataset.key - 1] = textarea.value
        textarea.value = ''
        save.dataset.mode = 'create'
    }
})

newEntry.addEventListener('click', function () {
    textarea.value = ''
    save.dataset.mode = 'create'
})