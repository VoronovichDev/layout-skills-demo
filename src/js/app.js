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
