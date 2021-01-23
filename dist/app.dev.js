"use strict";

var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');

var getRandomNumber = function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function () {
  // get random number between 0 - 3;
  var randomNumber = getRandomNumber();
  colorUni = colors[randomNumber];
  document.body.style.backgroundColor = colorUni;
  color.textContent = colorUni;
  localStorage.setItem('simpleColor', colorUni);
});

if (localStorage.getItem('simpleColor')) {
  document.body.style.backgroundColor = localStorage.getItem('simpleColor');
}

;