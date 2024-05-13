import {store} from './Store';
import {ListType} from './ListType';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();
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

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};
