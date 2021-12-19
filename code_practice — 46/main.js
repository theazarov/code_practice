'use strict';

let cells = document.querySelectorAll('#field td');
let table = document.getElementById('field')

function start(cells) {
	let i = 0
	let j = 0

	for (let cell of cells) {

		cell.addEventListener('click', function () {

			j++
			if (!cell.hasAttribute('data-game')) {
				i == 0 ? cell.innerHTML = 'X' : cell.innerHTML = 'O'

			}
			i == 0 ? i++ : i = 0

			if (isVictory(cells)) {
				alert(this.innerHTML + ' победили')
			} else if (j == 9 && !isVictory(cells)) {
				alert('ничья')
			}
		})
	}
}
start(cells)

function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let comb of combs) {

		if (cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != '') {
			return true
		}
	}
	return false
}
