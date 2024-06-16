var currentImageIndex = 0;
var images = document.querySelectorAll(".grid-item .image");
var totalImages = images.length;

function openModal(url, alt) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = url;
    modalImg.alt = alt;
    currentImageIndex = Array.from(images).findIndex(function(image) {
        return image.src === url;
    });
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    openModal(images[currentImageIndex].src, images[currentImageIndex].alt);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    openModal(images[currentImageIndex].src, images[currentImageIndex].alt);
}

function rotateLeft() {
    var modalImg = document.getElementById("modalImg");
    var currentRotation = parseInt(modalImg.style.transform.replace("rotate(", "").replace("deg)", ""));
    currentRotation = isNaN(currentRotation) ? 0 : currentRotation;
    modalImg.style.transform = "rotate(" + (currentRotation - 90) + "deg)";
}

function rotateRight() {
    var modalImg = document.getElementById("modalImg");
    var currentRotation = parseInt(modalImg.style.transform.replace("rotate(", "").replace("deg)", ""));
    currentRotation = isNaN(currentRotation) ? 0 : currentRotation;
    modalImg.style.transform = "rotate(" + (currentRotation + 90) + "deg)";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
};

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

//Gallery topslider

  //Top Slider 5 Frames//
  function preloadImages() {
    const images = [
        "static/Images/homeSlides/IMG26.jpg",
        "static/Images/homeSlides/IMG27.jpg",
        "static/Images/homeSlides/IMG28.jpg",
        "static/Images/homeSlides/IMG29.jpg",
        "static/Images/homeSlides/IMG30.jpg"
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

  const track = document.getElementById("image-track");
    
  let isDragging = false;
  
  const handleOnDown = e => {
      if (!e.target.classList.contains('images')) {
          isDragging = true;
          track.dataset.mouseDownAt = e.clientX || e.touches[0].clientX;
      }
  };
  
  const handleOnUp = () => {
      if (isDragging) {
          track.dataset.mouseDownAt = "0";  
          track.dataset.prevPercentage = track.dataset.percentage;
          isDragging = false;
      }
  };
  
  const handleOnMove = e => {
      if (isDragging) {
          const mouseDelta = parseFloat(track.dataset.mouseDownAt) - (e.clientX || e.touches[0].clientX),
                maxDelta = window.innerWidth / 2;
  
          const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
          track.dataset.percentage = nextPercentage;
  
          track.animate({
              transform: `translate(${nextPercentage}%, -50%)`
          }, { duration: 1200, fill: "forwards" });
  
          for (const image of track.getElementsByClassName("images")) {
              image.animate({
                  objectPosition: `${100 + nextPercentage}% center`
              }, { duration: 1200, fill: "forwards" });
          }
      }
  };
  
  window.addEventListener('mousedown', handleOnDown);
  window.addEventListener('touchstart', handleOnDown);
  window.addEventListener('mouseup', handleOnUp);
  window.addEventListener('touchend', handleOnUp);
  window.addEventListener('mousemove', handleOnMove);
  window.addEventListener('touchmove', handleOnMove);