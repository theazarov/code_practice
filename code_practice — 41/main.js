"use strict";

let test = document.getElementById("test");
let button = document.getElementById("button");

let questions = [
	{
		text: 'вопрос 1?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];

let j = 0;
let count = 0;


for(let key in questions){
  
  let div = document.createElement('div')

  for(let elem in questions[key].variants){
    let input = document.createElement('input')
    input.type="radio"
    input.name=j

    if(count == questions[key].right){
      input.dataset.right = ''
    }

    let span = document.createElement('span')
    span.innerHTML = questions[key].variants[elem]

    div.appendChild(input)
    div.appendChild(span)

    count++
  }

  let p = document.createElement('p')
  div.appendChild(p)
  test.appendChild(div)
  j++
  count = 0
}

let inputs = test.querySelectorAll("input");