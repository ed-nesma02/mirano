import { cartStore } from "./Store";
import { renderCart } from "./renderCart";

const headerCartBtn = document.querySelector('.header__cart-btn');
const cartClose = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');

const toggleCart = () => {
  cart.classList.toggle('cart_open');

  if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
    cart.scrollIntoView({behavior: 'smooth'});
  }
};

export const initCart = async () => {
  await cartStore.init();
  headerCartBtn.textContent = cartStore.getCart().length;

  renderCart();
  
  cartStore.subscribe(()=>{
    headerCartBtn.textContent = cartStore.getCart().length;
  })

  headerCartBtn.addEventListener('click', toggleCart);
  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  });
};
