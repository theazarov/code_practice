'use strict';

/*
let slider = document.getElementById('slider')
let left = document.getElementById('left')
let right = document.getElementById('right')
let imgs = ['1.png', '2.png', '3.png', '4.png', '5.png']
slider.src = "img/" + imgs[0]

let i = 1

let timerSlider = setInterval(function () {

	i > imgs.length - 1 ? i = 0 : i
	slider.src = "img/" + imgs[i++]

}, 10000)

right.addEventListener('click', function () {
	i > imgs.length - 1 ? i = 0 : i
	slider.src = "img/" + imgs[i++]
})

left.addEventListener('click', function () {
	i < 0 ? i = imgs.length - 1 : i
	slider.src = "img/" + imgs[i--]
})
*/

let slider = document.getElementById('slider')
let imgs = slider.querySelectorAll('img')
let i = 0

let timer = setInterval(function(){

	for(let img of imgs){
		img.classList.add('hidden')
	}

	i > imgs.length - 1 ? i = 0 : i
	imgs[i].classList.remove('hidden')
	i++
}, 1000)