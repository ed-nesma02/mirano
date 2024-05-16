export const modalInit = () => {
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.cart__order');
  const closeModalBtn = document.querySelector('.modal__close')

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('visually-hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('visually-hidden');
  })
};
