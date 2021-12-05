let field = document.getElementById('field')
let userOne = document.getElementById('userOne')
let userTwo = document.getElementById('userTwo')
let out = document.getElementById('out')
let towns = []
let first;
let last;
let player = 1


field.addEventListener('keydown', function(event){

    if(event.keyCode == 13 && towns.length == 0){
        towns.push(field.value)
        last = towns[towns.length-1].split('').pop()
        userOne.innerHTML = field.value + ' город на букву ' + last
        player = 2
    }

    if(event.keyCode == 13 && towns.length > 0){

        if(player == 2){
            myGame(field, towns, userTwo)

        } else {
            myGame(field, towns, userOne)
            player = 2
        }
    }
})

function myGame(town, arr, user){
    first = town.value.split('').shift()

    if(!arr.includes(town.value) && first == last){
        arr.push(town.value)
        last = towns[towns.length-1].split('').pop()
        user.innerHTML = town.value + ' город на букву ' + last
        player = 1
    }
}