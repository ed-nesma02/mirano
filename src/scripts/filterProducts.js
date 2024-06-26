import {fetchProducts} from './API';
import {CallBackWithPreloader} from './preload';

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');
  const filterBtn = document.querySelectorAll('.filter__type-btn');

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get('type');
    const minPrice = formData.get('minPrice');
    const maxPrice = formData.get('maxPrice');
    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    CallBackWithPreloader(goodsSection, fetchProducts, params);
  };

  filterForm.addEventListener('change', (event) => {
    const target = event.target;

    if (target.name === 'type') {
      goodsTitle.textContent = target.labels[0].textContent;
      filterForm.minPrice.value = '';
      filterForm.maxPrice.value = '';
      applyFilters();
      return;
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      applyFilters();
    }
  });

  filterBtn.forEach((btn) =>
    console.log(btn)
  );
};
