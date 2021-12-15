"use strict";
/*
let test = document.getElementById("test");
let button = document.getElementById("button");
let questions = {
	'Вопрос 1?': 'ответ 1',
	'Вопрос 2?': 'ответ 2',
	'Вопрос 3?': 'ответ 3',
}
let j = 0;

button.addEventListener("click", function one() {
  let inputs = test.querySelectorAll("input");
  let ps = test.querySelectorAll("p");

  if (button.dataset.get == "two") {
    for (let key in questions) {
      if (inputs[j].value == questions[key]) {
        ps[j].innerHTML += " правильно";
      } else {
        ps[j].innerHTML += " не правильно";
      }
      j++;
    }
    button.removeEventListener("click", one);
  }

  if (button.dataset.get == "one") {
    for (let question in questions) {
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
*/

/*
let test = document.getElementById("test");
let button = document.getElementById("button");
let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];
let j = 0;

button.addEventListener("click", function one() {
  let inputs = test.querySelectorAll("input");
  let ps = test.querySelectorAll("p");

  if (button.dataset.get == "two") {
    for (let key in questions) {
      if (inputs[j].value == questions[key].right) {
        ps[j].innerHTML += " правильно";
      } else {
        ps[j].innerHTML += " не правильно";
      }
      j++;
    }
    button.removeEventListener("click", one);
  }

  if (button.dataset.get == "one") {
    for (let key in questions) {
      let p = document.createElement("p");
      p.innerHTML = questions[key].text;
      test.appendChild(p);

      let input = document.createElement("input");
      test.appendChild(input);
    }
    button.innerHTML = "проверить ответы";
    button.dataset.get = "two";
  }
});
*/

/*
let test = document.getElementById("test");
let divs = test.querySelectorAll("div");
let p = document.createElement("p");
let j = 0;
p.innerHTML = "вы ответили правильно на " + j + " вопросов";
test.appendChild(p);

for (let div of divs) {
  let inputs = div.querySelectorAll("input");

  for (let input of inputs) {
    input.addEventListener("click", function () {
      if (input.checked) {
        if (input.hasAttribute("data-right")) {
          j++;
        }

        for (let elem of inputs) {
          elem.disabled = true;

          if (elem.hasAttribute("data-right")) {
            elem.nextElementSibling.classList.add("green");
            p.innerHTML = "вы ответили правильно на " + j + " вопросов";
          } else {
            elem.nextElementSibling.classList.add("red");
          }
        }
      }
    });
  }
}
*/

/*
let test = document.getElementById("test");
let button = document.getElementById('button')
let j = 0

button.addEventListener('click', function(){
  let inputs = test.querySelectorAll('input')

  for(let input of inputs){
    if(input.hasAttribute('data-right') && input.checked){
      input.nextElementSibling.classList.add('green')
      j++
    }

  }

  let p = document.createElement('p')
  p.innerHTML = 'вы ответили правильно на ' + j + ' вопросов'
  test.appendChild(p)
})
*/

let test = document.getElementById("test");
let button = document.getElementById("button");
let answers = [0, 1, 2];
let j = 0;
let count = 0;

button.addEventListener("click", function () {
  let divs = test.querySelectorAll("div");
  console.log(divs);

  for (let div of divs) {
    let inputs = div.querySelectorAll("input");
    console.log(inputs[answers[j]]);

    if (inputs[answers[j]].checked == true) {
      inputs[answers[j]].nextElementSibling.classList.add("green");
      count++;
    }
    j++;
  }
  let p = document.createElement("p");
  p.innerHTML = "правильных ответов" + count;
});
