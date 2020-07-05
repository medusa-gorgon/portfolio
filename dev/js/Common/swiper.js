import Swiper from 'swiper';

const commonSwiper = new Swiper('.swiper .swiper-container', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper__button_next',
    prevEl: '.swiper__button_prev',
  },
});
