'use strict';

//mobile ver. nevigation menu button
const navBtn = document.querySelector('.btn');
const burgerBtn = document.querySelector('.btn__burger-icon');
const closeBtn = document.querySelector('.btn__close-icon');
const navMenu = document.querySelector('.mobile-menu');

navBtn.addEventListener('click', event => {
   if(event.target === burgerBtn) {
      burgerBtn.classList.add('btn__icon--hidden');
      closeBtn.classList.remove('btn__icon--hidden');
      navMenu.classList.remove('mobile-menu--hidden');
   } else {
      burgerBtn.classList.remove('btn__icon--hidden');
      closeBtn.classList.add('btn__icon--hidden');
      navMenu.classList.add('mobile-menu--hidden');
   }
})