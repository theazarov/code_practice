"use strict";

/*
let slider = document.getElementById('slider')
let texts = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6']
let p = document.createElement('p')
let i = 0

slider.appendChild(p)

let timer = setInterval(function(){
    p.innerHTML = texts[i]

    i == 2 ? i = 0 : i++
}, 1000)
*/

/*
let slider = document.getElementById('slider')
let left = document.getElementById('left')
let right = document.getElementById('right')
let texts = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6']
let out = document.getElementById('out')
let i = 0

out.innerHTML = texts[0]
*/

/*
right.addEventListener('click', function(){
    out.innerHTML = texts[++i]

    i == texts.length -1 ? i = -1 : i
    console.log(i)
})

left.addEventListener('click', function(){
    i == 0 ? i = texts.length : i

    out.innerHTML = texts[--i]
    console.log(i)
})
*/

/*
right.addEventListener('click', function one(){
    i == texts.length -1 ? i == texts.length -1 : i++

    out.innerHTML = texts[i]
    console.log(i)
})


left.addEventListener('click', function two(){
    i == 0 ? i == 0 : i--

    out.innerHTML = texts[i]
    console.log(i)
})
*/

let left = document.getElementById("left");
let right = document.getElementById("right");
let out = document.getElementById("out");
let i = 0;

let texts = ["1.png", "2.png", "3.png", "4.png", "5.png"];

let timerRight = setInterval(function () {
  out.src = "img/" + texts[i++];

  i > texts.length - 1 ? (i = 0) : i;
}, 10000);

left.addEventListener("click", function () {
  i < 0 ? (i = texts.length - 1) : i;
  out.src = "img/" + texts[i--];
  console.log(i);
});

right.addEventListener("click", function () {
  i > texts.length - 1 ? (i = 0) : i;
  out.src = "img/" + texts[i++];
  console.log(i);
});
