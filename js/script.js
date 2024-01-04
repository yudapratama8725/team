// Navbar Setion JS
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      var heroSection = document.querySelector(".hero-section");
      if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
          header.classList.add("header-scroll");
      }
      else {
        header.classList.remove("header-scroll");
      }
  });
});

// Swiper Section JS
var swiper = new Swiper(".card_slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
  nextEl: ".next",
  prevEl: ".prev",
},
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      640: {
      slidesPerView: 1,
      spaceBetween: 20,
      },
      768: {
      slidesPerView: 2,
      spaceBetween: 20,
      },
      1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      },
      1400: {
      slidesPerView: 4,
      spaceBetween: 20,
      },
  },
});
