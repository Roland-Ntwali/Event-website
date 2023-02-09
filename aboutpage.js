const Hamburger = document.querySelector('.hamburger-menu');
const Navigation = document.querySelector('.navigation');
const remove = document.querySelectorAll('.nav-link');

Hamburger.addEventListener('click', () => {
  Hamburger.classList.toggle('active');
  Navigation.classList.toggle('active');
});

const removeList = [...remove];
removeList.forEach((list) => {
  list.addEventListener('click', () => {
    Hamburger.classList.toggle('active');
    Navigation.classList.toggle('active');
  });
});