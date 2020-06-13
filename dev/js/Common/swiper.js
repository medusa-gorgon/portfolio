import Swiper from 'swiper';

const heroSwiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.hero__swiper-button_next',
    prevEl: '.hero__swiper-button_prev',
  },
});
