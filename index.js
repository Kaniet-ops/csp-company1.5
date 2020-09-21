
window.onload = function() {
  console.log(window.innerWidth)
  if(window.innerWidth < 768) {
    let row = document.querySelector('.row')
    let divContainer = document.createElement('div')
    divContainer.className = 'swiper-container'
    row.prepend(divContainer)
  }
  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  })
  console.log(mySwiper)


  let arrow = document.querySelector('.arrow')
  let arrowText =  document.querySelector('.arrow__text')
  let arrowImg = document.querySelector('.arrow__img')
  let cards = document.querySelectorAll('.section__column--hide')

  arrow.addEventListener('click', function() {
    if(arrowText.innerHTML === 'Скрыть') {
      arrowText.innerHTML = 'Показать все'
      arrowImg.src = './img/arrow-down.svg'
    } else {
      arrowText.innerHTML = 'Скрыть'
      arrowImg.src = './img/arrow-up.svg'
    }


    for(let i = 0; i < cards.length; i++) {
      cards[i].classList.toggle('section__column--hide')
    }
  })

}
