let currentPosition = 1; // Initial position
const totalItems = document.querySelectorAll('#carousel .item').length;
const interval = 5000; // Change slide every 5 seconds
const transitionDuration = 2; // Duration of transition between slides in seconds

function updateCarousel() {
    const currentItem = document.querySelector(`#carousel .item:nth-of-type(${currentPosition})`);
    currentItem.style.transition = `transform ${transitionDuration}s ease-in-out`;
    currentItem.style.transform = `rotateY(calc(-10deg * 0)) translateX(calc(-300px * 0))`; // Reset the current slide

    currentPosition = (currentPosition % totalItems) + 1; // Move to the next slide
    const nextItem = document.querySelector(`#carousel .item:nth-of-type(${currentPosition})`);
    nextItem.style.transition = `transform ${transitionDuration}s ease-in-out`;
    nextItem.style.transform = `rotateY(calc(-10deg * 1)) translateX(calc(-300px * 1))`; // Apply transformation to the next slide

    setTimeout(updateCarousel, transitionDuration * 1000); // Schedule the next update
}

updateCarousel(); // Start the slideshow




//SLIDER//
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});












