'use strict'; //mobile ver. nevigation menu button

var navBtn = document.querySelector('.btn');
var burgerBtn = document.querySelector('.btn__burger-icon');
var closeBtn = document.querySelector('.btn__close-icon');
var navMenu = document.querySelector('.mobile-menu');
navBtn.addEventListener('click', function (event) {
  if (event.target === burgerBtn) {
    burgerBtn.classList.add('btn__icon--hidden');
    closeBtn.classList.remove('btn__icon--hidden');
    navMenu.classList.remove('mobile-menu--hidden');
  } else {
    burgerBtn.classList.remove('btn__icon--hidden');
    closeBtn.classList.add('btn__icon--hidden');
    navMenu.classList.add('mobile-menu--hidden');
  }
});