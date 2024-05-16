import {productStore} from './Store';
import {ListType} from './ListType';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const categories = productStore.getCategories();
    const choicesBox = document.querySelector('.filter__choices-box-btn');

    if (categories.size) {
      typeChoices.style.display = '';
      choicesBox.textContent = '';
      const typeList = ListType([...categories]);
      choicesBox.append(typeList);
    } else {
      typeChoices.style.display = 'none';
    }
  };

  productStore.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
