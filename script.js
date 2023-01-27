new Swiper('.swiper', {
  /* direction: 'vertical' */
  speed: 2000,
  mousewheel: true,
  spaceBetween: 20,
  parallax: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    clickable: true
  },
});

Particles.init({
  selector: '.particles',
  color: '#BB695Eaa',
  minDistance: 20,
  sizeVariations: 3,
});

const modalContainer = document.querySelector('#modal-container');
const body = document.querySelector('body');

modalContainer.addEventListener('click', () => {
  modalContainer.classList.add('out');
  body.classList.remove('modal-active');
});

window.addEventListener('keypress', (e) => {
  if (e.code === 'Space') {
    modalContainer.classList.add('out');
    body.classList.remove('modal-active');
  }
});
