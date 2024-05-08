import {store} from './Store';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();

    if (categories.size) {
      typeChoices.style.display = '';
      const typeList = document.querySelector('.filter__type-list');
      typeList.innerHTML = '';

      categories.forEach((category) => {
        const typeItem = document.createElement('li');
        typeItem.classList.add('filter__type-item');
        const typeBtn = document.createElement('button');
        typeBtn.classList.add('filter__type-btn');
        typeBtn.type = 'button';
        typeBtn.textContent = category;

        typeItem.append(typeBtn);
        typeList.append(typeItem);
      });
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
