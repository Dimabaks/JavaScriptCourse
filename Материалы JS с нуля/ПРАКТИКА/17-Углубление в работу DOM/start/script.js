'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


console.log(window);

// Scroll

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", function() {
  section1.scrollIntoView({behavior: "smooth"})
})


document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', function(e) {
  e.preventDefault();
  const id = this.getAttribute('href');
  console.log(id);
  document.querySelector(id).scrollIntoView({behavior: "smooth"});
}))

/* const h1 = document.querySelector("h1");
function alertH1() {
  alert("Hello");
}
h1.addEventListener("mouseenter", alertH1)
setTimeout(function() {
   h1.removeEventListener("mouseenter", alertH1)
}, 4000) */


/* document.querySelectorAll(".nav__link").forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  })
}) */



// Tabs

const tabs = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');

tabs.forEach(tab => tab.addEventListener("click", function() {
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tab.classList.add('operations__tab--active');

  tabContent.forEach(content => content.classList.remove("operations__content--active"));
  const dataTab = tab.dataset.tab;
  document.querySelector(`.operations__content--${dataTab}`).classList.add('operations__content--active');
}))


/* const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");


tabContainer.addEventListener("click", function(e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked)
  if(!clicked) return;

  tabs.forEach(tab => tab.classList.remove("operations__tab--active"))
  clicked.classList.add("operations__tab--active");
  tabsContent.forEach(content => content.classList.remove("operations__content--active"))

  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")
})
 */

// Hover nav

const nav = document.querySelector(".nav__links");

function hover(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll(".nav__link");
    const logo = link.closest('nav').querySelector(".nav__logo");

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    })
    logo.style.opacity = this;
  }
}


nav.addEventListener("mouseover", hover.bind(0.5));

nav.addEventListener("mouseout", hover.bind(1));

//Появление меню после прокрутки
//Старый метод
const navContainer = document.querySelector(".nav");
/* const coord = section1.getBoundingClientRect();
console.log(coord);

console.log(window);

window.addEventListener("scroll", function() {
  console.log(this.window.scrollY);
  if (this.window.scrollY > coord.top) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky")
  }
}) */

function callBack(entries) {
  if(!entries[0].isIntersecting) {
    navContainer.classList.add('sticky')
  } else {
    navContainer.classList.remove('sticky')
  }
}

const options = {
  root: null,
  threshold: 0.1
}


const observer = new IntersectionObserver(callBack, options)
observer.observe(document.querySelector(".header"));

//Всплытие секций

const sectionObserver = new IntersectionObserver(revealSection, {threshold: 0.15});

function revealSection(entries, observe) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.remove('section--hidden');
    observe.unobserve(entries[0].target);
  }
}

const allSections = document.querySelectorAll(".section");
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

//Загрузка блюренных изображений

const images = document.querySelectorAll('img[data-src]');
console.log(images);


const imgObserver = new IntersectionObserver(loadImg, {threshold: 0.15})

function loadImg(entries, observer) {
  if(!entries[0].isIntersecting) return;
  console.log(entries);
  entries[0].target.src = entries[0].target.dataset.src;
  entries[0].target.addEventListener('load', () => {
    entries[0].target.classList.remove('lazy-img');
  })
  observer.unobserve(entries[0].target)
}

images.forEach(img => {
  imgObserver.observe(img)
})

//Слайдер

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
const maxSlides = slides.length;
console.log(maxSlides);

function createDots() {
  slides.forEach(function(_, i) {
    dotsContainer.insertAdjacentHTML (
      'beforeend',
      `
        <button class = "dots__dot" data-slide = "${i}"></button>
      `
    )
  })
}
createDots();

function goToSlide(slide) {
  slides.forEach(function (s, i) {
  s.style.transform = `translateX(${100 * (i - slide)}%)`
  })
}
goToSlide(0)

function activateDots(slide) {
  document.querySelectorAll(".dots__dot").forEach(function(dot){
    dot.classList.remove("dots__dot--active");
  })
  document.querySelector(`.dots__dot[data-slide ="${slide}"]`).classList.add("dots__dot--active");
}

activateDots(0);

function nextSlide() {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDots(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDots(currentSlide);
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide);


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide()
  }
})

dotsContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains("dots__dot") ) {
    const slide = e.target.dataset.slide;
    console.log(slide);
    goToSlide(slide);
    activateDots(slide);
  }
})