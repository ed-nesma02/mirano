import {API_URL} from './API';
import {cartStore} from './Store';

export const ProductCard = (product) => (
  <li class="goods__item">
    <article class="goods__card card">
      <img
        src={`${API_URL}${product.photoUrl}`}
        alt={product.name}
        class="card__image"
      />
      <div class="card__content">
        <h3 class="card__title">{product.name}</h3>
        <p class="card__date-delivery">сегодня в 14:00</p>
        <button
          class="card__btn"
          data-id={product.id}
          onMouseEnter={(e) => {
            e.target.textContent = 'В корзину';
          }}
          onMouseLeave={(e) => {
            e.target.innerHTML = `${product.price}&nbsp;₽`;
          }}
          onClick={() => {
            cartStore.addProductCart(product.id);
          }}
        >
          {product.price}&nbsp;₽
        </button>
      </div>
    </article>
  </li>
);
