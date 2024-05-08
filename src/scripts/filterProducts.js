import {fetchProducts} from './API';

const filterType = (type) => {
  fetchProducts({type});
};

const filter = (type, minPrice = '', maxPrice = '') => {
  fetchProducts({
    type,
    minPrice,
    maxPrice,
  });
};

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');
  const typeBtn = document.querySelectorAll('.filter__type-btn');

  filterForm.addEventListener('change', (event) => {
    const target = event.target;

    if (target.name === 'type') {
      filterType(filterForm.type.value);
    }

    if (target.name === 'minPrice' || target.name === 'maxPrice') {
      filter(
        filterForm.type.value,
        filterForm.minPrice.value,
        filterForm.maxPrice.value
      );
    }
  });
};
