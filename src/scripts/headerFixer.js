import {debounce} from './debounce';

export const initHeaderFixer = () => {
  let lastScroll = 0;
  const header = document.querySelector('.header');
  const body = document.body;
  let headerHight = header.offsetHeight;

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

  const updateHeaderHeight = () => {
    headerHight = header.offsetHeight;
  };

  const handleScroll = () => {
    const scrollDistance = window.scrollY;
    if (scrollPosition() < lastScroll && scrollDistance > 129) {
      header.classList.add('header_fixed');
      body.style.paddingTop = `${headerHight}px`;
    } else {
      header.classList.remove('header_fixed');
      body.style.paddingTop = '0px';
    }
    lastScroll = scrollPosition();
  };

  window.addEventListener('resize', debounce(updateHeaderHeight, 100));
  window.addEventListener('scroll', debounce(handleScroll, 100));
};
