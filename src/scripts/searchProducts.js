import {fetchProducts} from './API';
import { CallBackWithPreloader } from './preload';

export const initSearchProducts = () => {
  const headerForm = document.querySelector('.header__form');
  const goodsTitle = document.querySelector('.goods__title');
  const filterEmpty = document.querySelector('#bouquets');
  const goodsSection = document.querySelector('.goods');

  headerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(headerForm);

    const searchQuery = formData.get('search').trim();
    console.log(searchQuery);
    if (searchQuery) {
      CallBackWithPreloader(goodsSection,fetchProducts,{search: searchQuery})
      goodsTitle.textContent = `Резльтаты по запросу: ${searchQuery}`;
      headerForm.reset();
      filterEmpty.checked = false;
    }
  });
};
