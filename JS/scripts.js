document.getElementById("year").textContent = new Date().getFullYear();


// Project Section
document.addEventListener("DOMContentLoaded", function () {
  const filterBtn = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Reset all buttons
      filterBtn.forEach((button) => {
        button.classList.remove("btn-dark");
        button.classList.add("btn-act");
      });

      // Clicked button becomes dark
      btn.classList.remove("btn-act");
      btn.classList.add("btn-dark");

      const filterValue = btn.getAttribute("data-filter");
      projectItems.forEach((item) => {
        if (
          filterValue === "All" ||
          item.getAttribute("data-project") === filterValue
        ) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
          }, 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
});

// Recent Images swiper
var swiper = new Swiper("#image-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
     425: {
      slidesPerView: 2,
    },
    768:{
      slidesPerView:2,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
});

// Testimonial swiper//
const Testimonial = new Swiper("#testimonial-swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
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
