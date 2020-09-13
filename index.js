


window.onload = function() {

  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  })

  let arrow = document.querySelector('.arrow');
  let sectionRowHide = document.querySelector('.section__row--hide');
  let arrowHide = document.querySelector('.arrow--hide');
  arrow.addEventListener('click', function() {
    sectionRowHide.classList.toggle('section__row--hide');
    arrowHide.style.display = 'flex';
    arrow.style.display = 'none';
  });
  arrowHide.addEventListener('click', function() {
    sectionRowHide.classList.toggle('section__row--hide');
    arrowHide.style.display = 'none';
    arrow.style.display = 'flex';
  });
}