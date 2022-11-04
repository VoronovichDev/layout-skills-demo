const burgerOpen = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.header__burger--close');
const burgerItem = document.querySelector('.header__inner');
const body = document.querySelector('body');
const headerLink = document.querySelectorAll('.header__links');

burgerOpen.addEventListener('click', (e) => {
  toggleBurger();
});

burgerClose.addEventListener('click', (e) => {
  toggleBurger();
});

headerLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    toggleBurger();
  });
});

function toggleBurger() {
  burgerItem.classList.toggle('active');
  body.classList.toggle('active');
  burgerOpen.classList.toggle('active');
  burgerClose.classList.toggle('active');
}
