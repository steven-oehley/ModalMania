'use strict';

const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const modalThree = document.querySelector('.modal-three');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function closeModal() {
  modalOne.classList.add('hidden');
  modalTwo.classList.add('hidden');
  modalThree.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target.dataset.id === '1') {
      modalOne.classList.remove('hidden');
    } else if (e.target.dataset.id === '2') {
      modalTwo.classList.remove('hidden');
    } else if (e.target.dataset.id === '3') {
      modalThree.classList.remove('hidden');
    }
    overlay.classList.remove('hidden');
  });
});

btnsCloseModal.forEach(btn => {
  btn.addEventListener('click', e => closeModal(e));
});

overlay.addEventListener('click', e => closeModal(e));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
