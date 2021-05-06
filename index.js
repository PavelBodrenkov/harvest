const openButton = document.querySelector('.buttop__open');
const popup = document.querySelector('.popup');
const closeButtonPopup = document.querySelector('.popup__button-close');
const Esc = 27;
const input = document.querySelectorAll('.popup__input');
const form = document.querySelector('.form');
const span = document.querySelector('.span')
const popupDoneContainer = document.querySelector('.popup__done__container')
const req = document.querySelectorAll('._req')

if (screen.width > 1280) {
  parallaxMouse({ elements: '.p1', moveFactor: 1, wrap: '.header'})
  parallaxMouse({ elements: '.p2', moveFactor: -2, wrap: '.header'})
  parallaxMouse({ elements: '.p6', moveFactor: 3, wrap: '.header'})
  parallaxMouse({ elements: '.p7', moveFactor: -4, wrap: '.header'})
  parallaxMouse({ elements: '.p5', moveFactor: 5, wrap: '.header'})
  parallaxMouse({ elements: '.p8', moveFactor: -6, wrap: '.header'})
}


var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 5,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    655: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    995: {
      slidesPerView: 5,
      spaceBetween: 5,
    }
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__right",
    prevEl: ".slider__left",
  },
});

function openPopup () {
  popup.classList.add('popup__opened')
  input.forEach(item => {
      item.classList.remove('_error')
      item.classList.remove('correctly')   
  })
}

function closePopup () {
  popup.classList.remove('popup__opened')
  form.reset()
}

function closeOverlay (e) {
  if(e.target.classList.contains('popup__opened')) {
      popup.classList.remove('popup__opened')
      form.reset()
  }
}

function closeEsc (e) {
  if(e.keyCode === Esc) {
      popup.classList.remove('popup__opened')
      form.reset()
  }
}

function submitForm (e) {
  e.preventDefault()
  let hasError = false
   req.forEach(item => {
    if(item.value === "") {
      span.style.display ='block'
      span.textContent = '*Не все обязательные поля заполнены'
      hasError=true
      item.classList.add('_error')
    } 
  })
  
  return hasError    
}

function dataCheck() {
  let name
  let error
 for (let i = 0; i < req.length; i++) {
   name = req[i].value;
   error = req[i]
       if(name !=='') {
         span.textContent = ''
         error.classList.remove('_error')
         error.classList.add('correctly')
   } else {
     span.textContent = '*Не все обязательные поля заполнены'
     error.classList.remove('correctly')
   }
 }
};

closeButtonPopup.addEventListener('click', () => {
  closePopup()
  popupDoneContainer.classList.remove('popup__done__container_visible')
  form.style.opacity = '1'
})

openButton.addEventListener('click', () => {
  openPopup()
  span.textContent="";
})

document.addEventListener('click', (e) => {
  closeOverlay(e)
  popupDoneContainer.classList.remove('popup__done__container_visible')
  form.style.opacity = '1'
})

document.addEventListener('keydown', (e) => {
  closeEsc(e)
  popupDoneContainer.classList.remove('popup__done__container_visible')
  form.style.opacity = '1'
})

form.addEventListener('submit', (e) => {
  if(!submitForm(e)) {
      console.log(submitForm(e))
      span.style.display = 'none'
      form.style.opacity = '0'
      popupDoneContainer.classList.add('popup__done__container_visible')
  }
})

document.addEventListener('input', () => {
  dataCheck()
})


