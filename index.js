import '@/scss/index.scss';

const header = document.querySelector('.header');
const body = document.body;
let headerHight = header.offsetHeight;

window.addEventListener('resize', () => {
  headerHight = header.offsetHeight;
});

window.addEventListener('scroll', () => {
  const scrollDistance = window.scrollY;
  if (scrollDistance > 129) {
    header.classList.add('header_fixed');
    body.style.paddingTop = `${headerHight}px`;
  } else {
    header.classList.remove('header_fixed');
    body.style.paddingTop = '0px';
  }
});

const adjustElementPosition = (element, count = 0) => {
  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  if (rect.left < 0) {
    element.style.left = '0';
    element.style.right = 'auto';
    element.style.transform = 'translateX(0)';
  } else if (rect.right > viewportWidth) {
    element.style.left = 'auto';
    element.style.right = '0';
    element.style.transform = 'translateX(0)';
  } else {
    element.style.left = '50%';
    element.style.right = 'auto';
    element.style.transform = 'translateX(-50%)';
  }

  const postRect = element.getBoundingClientRect();
  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(element, count);
  }
};

const choices = document.querySelectorAll('.choices');

choices.forEach((choice) => {
  const btn = choice.querySelector('.choices__btn');
  const box = choice.querySelector('.choices__box');

  btn.addEventListener('click', () => {
    const otherOpen = document.querySelector('.choices__box_open');
    if (otherOpen && otherOpen !== box) {
      otherOpen.classList.remove('choices__box_open');
      document
        .querySelector('.choices__btn_open')
        .classList.remove('choices__btn_open');
    }
    box.classList.toggle('choices__box_open');
    btn.classList.toggle('choices__btn_open');
    adjustElementPosition(box);
  });
  window.addEventListener('resize', () => {
    adjustElementPosition(box);
  });
});

const headerCartBtn = document.querySelector('.header__cart-btn');
const cartClose = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');

headerCartBtn.addEventListener('click', () => {
  cart.classList.toggle('cart_open')
})

cartClose.addEventListener('click', () => {
  cart.classList.remove('cart_open')
})