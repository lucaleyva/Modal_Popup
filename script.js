// VARIABLES
const modal = document.querySelector('.modal'),
  btn = document.querySelector('.btn'),
  close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
