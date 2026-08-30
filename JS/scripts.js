
document.getElementById('year').textContent= new Date().getFullYear();


// Testimonial swiper//
const Testimonial = new Swiper('#testimonial-swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
  },
});

