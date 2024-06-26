// selecting the element
const title = document.getElementById('title');

// accessing the color variables from my css file
const style = getComputedStyle(document.body);
const yellow = style.getPropertyValue('--primary-color-yellow');

// creating mouseover effect
title.addEventListener("mouseover", function (e) {
  this.style.color = yellow;
});