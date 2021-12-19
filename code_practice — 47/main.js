'use strict';

let table = document.getElementById('field')

function getTable(one, two, table){

	for(let i = 0; i < one; i++){
		let tr = document.createElement('tr')

		for(let j = 0; j < two; j++){
			let td = document.createElement('td')
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
}
getTable(4, 4, table)