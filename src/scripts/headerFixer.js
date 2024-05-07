import {debounce} from './debounce';

export const initHeaderFixer = () => {
  const header = document.querySelector('.header');
  const body = document.body;
  let headerHight = header.offsetHeight;

  const updateHeaderHeight = () => {
    headerHight = header.offsetHeight;
  };

  const handleScroll = () => {
    const scrollDistance = window.scrollY;
    if (scrollDistance > 129) {
      header.classList.add('header_fixed');
      body.style.paddingTop = `${headerHight}px`;
    } else {
      header.classList.remove('header_fixed');
      body.style.paddingTop = '0px';
    }
  };

  window.addEventListener('resize', debounce(updateHeaderHeight, 100));
  window.addEventListener('scroll', debounce(handleScroll, 100));
};
