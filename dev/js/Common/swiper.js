import Swiper from 'swiper';

const heroSwiper = new Swiper('.swiper-container', {
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.hero__swiper__button__next',
        prevEl: '.hero__swiper__button__prev',
    },
});