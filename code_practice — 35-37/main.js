"use strict";

let test = document.getElementById("test");
//let inputs = test.querySelectorAll("input");

/*
for(let input of inputs){

    input.addEventListener('keydown', function(event){
        if(event.keyCode == 13){

            if(input.value == input.dataset.right){
                input.classList.remove('wrong')
                input.classList.add('right')
            }
            if(input.value != input.dataset.right) {
                input.classList.remove('right')
                input.classList.add('wrong')
            }
        }
    })
}
*/

/*
let button = document.getElementById('button')
let ps = test.querySelectorAll('p')
let answers = [
	'ответ 1',
	'ответ 2',
	'ответ 3',
]
let j = 0

button.addEventListener('click', function go(){

    for(let input of inputs){

        if(input.value == answers[j]){
            ps[j].innerHTML += ' правильно'

        } else {
            ps[j].innerHTML += ' не правильно'

        }
        j++
    }
    button.removeEventListener('click', go)
})
*/

let button = document.getElementById("button");
let answers = ["ответ 1", "ответ 2", "ответ 3"];
let questions = ["вопрос 1?", "вопрос 2?", "вопрос 3?"];
let j = 0;

button.addEventListener("click", function one() {
  let inputs = test.querySelectorAll("input");
  let ps = test.querySelectorAll("p");

  if (button.dataset.get == "two") {
    for (let input of inputs) {
      if (input.value == answers[j]) {
        ps[j].innerHTML += " правильно";
      } else {
        ps[j].innerHTML += " не правильно";
      }
      j++;
    }
    button.removeEventListener("click", one);
  }

  if (button.dataset.get == "one") {
    for (let question of questions) {
      let p = document.createElement("p");
      p.innerHTML = question;
      test.appendChild(p);

      let input = document.createElement("input");
      test.appendChild(input);
    }
    button.innerHTML = "проверить ответы";
    button.dataset.get = "two";
  }
});
