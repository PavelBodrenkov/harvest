const openButton = document.querySelector('.buttop__open');
const popup = document.querySelector('.popup');
const closeButtonPopup = document.querySelector('.popup__button-close');
const Esc = 27;
const input = document.querySelectorAll('.popup__input');
const form = document.querySelector('.form');
const span = document.querySelector('.span')
const popupDoneContainer = document.querySelector('.popup__done__container')


parallaxMouse({ elements: '.p1', moveFactor: 5, wrap: '.header',perspective: '150px'})
parallaxMouse({ elements: '.p2', moveFactor: -30, wrap: '.header', perspective: '200px'})
parallaxMouse({ elements: '.p6', moveFactor: 20, wrap: '.header', perspective: '200px'})
// parallaxMouse({ elements: '.p4', moveFactor: 10, wrap: '.header'})
parallaxMouse({ elements: '.p7', moveFactor: -25, wrap: '.header', perspective: '100px'})
parallaxMouse({ elements: '.p5', moveFactor: 30, wrap: '.header', perspective: '100px'})
parallaxMouse({ elements: '.p8', moveFactor: -10, wrap: '.header'})


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
  for( let elem of form.elements) {
      if(elem.classList.contains('_req')) {
          if(elem.value === "") {
              elem.classList.add('_error')
              hasError=true
              span.style.display ='block'
              span.textContent = '*Не все обязательные поля заполнены'  
          } else {
              elem.classList.remove('_error')   
          }
      }       
  }
  return hasError    
}

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
})

document.addEventListener('keydown', (e) => {
  closeEsc(e)
})

form.addEventListener('submit', (e) => {
  if(!submitForm(e)) {
      console.log(submitForm(e))
      span.style.display = 'none'
      form.style.opacity = '0'
      popupDoneContainer.classList.add('popup__done__container_visible')
  }
})

function dataCheck() {
   let name
   let error
  for (let i = 0; i < input.length; i++) {
    name = input[i].value;
    error = input[i]
        if(name !=='') {
          span.textContent = ''
          error.classList.remove('_error')
    } else {
      span.textContent = '*Не все обязательные поля заполнены'
    }
  }
};
document.addEventListener('input', () => {
  dataCheck()
})




 

      // item.onblur = () => {
      //   const message = input.nextSibling.nextElementSibling;
      //   message.style.display = input.value ? 'none' : 'block';
      // if(item.value !== "") {
      //   item.classList.remove('_error')
      //   hasError=true
      // }
    
      // }
  



// function checkMediaQuery() {
//   if (window.innerWidth < 500) {
//     console.log('Media Query Matched!')
//   }
// }
// window.addEventListener('resize', checkMediaQuery);

// const mediaQuery = window.matchMedia('(max-width: 500px)')
// function handleTabletChange(e) {
//   if (e.matches) {
//     console.log('Media Query Matched111!')
//     parallaxMouse.remove()
//   }
// }
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)