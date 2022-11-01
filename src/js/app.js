import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper';
import {
  Navigation,
  EffectFade,
  Pagination,
  Thumbs,
  Controller,
  FreeMode,
  Scrollbar,
  A11y,
  Mousewheel,
} from 'swiper';
import AOS from 'aos';

flsFunctions.isWebp();

const swiper = new Swiper('.auctions-slider', {
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  modules: [Navigation, FreeMode],
  autoHeight: true,
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});

const swiper2 = new Swiper('.popular-slider', {
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  modules: [Navigation, FreeMode],
  autoHeight: true,
  speed: 500,
  slidesPerView: 2.5,
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});

const swiper3 = new Swiper('.categories-slider', {
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  modules: [Navigation, FreeMode],
  autoHeight: true,
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 42,
  freeMode: true,
  grabCursor: true,
});
