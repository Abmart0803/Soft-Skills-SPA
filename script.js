/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
// after refactoring the code.

// After refactoring the code
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal1');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnCloseModal3 = document.querySelector('.close-modal3');
const btnsOpenModal = document.querySelectorAll('.show-modal1');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');
const btnsOpenModal3 = document.querySelectorAll('.show-modal3');

console.log(btnsOpenModal);

const openModal = function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal1 = function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal2 = function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal2 = function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal3 = function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal3 = function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal1);

  overlay.addEventListener('click', closeModal1);
}

document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    closeModal1();
  }
});

for (let j = 0; j < btnsOpenModal2.length; j++) {
  btnsOpenModal2[j].addEventListener('click', openModal2);

  btnCloseModal2.addEventListener('click', closeModal2);

  overlay.addEventListener('click', closeModal2);
}

document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal2.classList.contains('hidden')) {
    closeModal2();
  }
});

for (let k = 0; k < btnsOpenModal3.length; k++) {
  btnsOpenModal3[k].addEventListener('click', openModal3);

  btnCloseModal3.addEventListener('click', closeModal3);

  overlay.addEventListener('click', closeModal3);
}

document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal3.classList.contains('hidden')) {
    closeModal3();
  }
});
