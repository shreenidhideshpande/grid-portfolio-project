'use strict';

const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const mobileNav = document.getElementsByClassName('mobileNav');

function menuClick() {
  bar1.classList.toggle('animatedBar1');
  bar2.classList.toggle('animatedBar2');
  bar3.classList.toggle('animatedBar3');
  mobileNav[0].classList.toggle('mobileNavDisplay');
}

const hamburgerMenu = document.getElementsByClassName('hamburger');
// console.log(hamburgerMenu[0]);
hamburgerMenu[0].addEventListener('click', menuClick);
