var allImages = [];
var currentImageIndex = 0;

function initializeImages() {
    allImages = Array.from(document.querySelectorAll(".white-frame-container .image, .image-gallery .image"));
    console.log("All images in order:");
    allImages.forEach((img, index) => {
        console.log(index, img.src);
    });
}

function openModal(url, alt, event) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = url;
    modalImg.alt = alt;

    // Reset rotation
    modalImg.style.transform = 'rotate(0deg)';
    modalImg.dataset.rotation = '0';

    currentImageIndex = allImages.findIndex(img => img.src.includes(url.split('/').pop()));
    console.log("Opened image at index:", currentImageIndex);

    // Check if the image is from an enlarged group and add the class if necessary
    var isEnlarged = event.target.closest('.enlarged-group') !== null;
    if (isEnlarged) {
        modalImg.classList.add('enlarged');
    } else {
        modalImg.classList.remove('enlarged');
    }
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + allImages.length) % allImages.length;
    let nextImage = allImages[currentImageIndex];
    openModal(nextImage.src, nextImage.alt, { target: nextImage });
}

function prevImage() {
    changeImage(-1);
}

function nextImage() {
    changeImage(1);
}

function rotateImage(degree) {
    var modalImg = document.getElementById("modalImg");
    var currentRotation = parseInt(modalImg.dataset.rotation || "0");
    currentRotation += degree;
    modalImg.style.transform = `rotate(${currentRotation}deg)`;
    modalImg.dataset.rotation = currentRotation;
}

function rotateLeft() {
    rotateImage(-90);
}

function rotateRight() {
    rotateImage(90);
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
};

// Swiper initialization
var trandingSlider = new Swiper('.tranding-slider', {
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

// Preload images
function preloadImages() {
    const imageUrls = [
        "static/Images/homeSlides/IMG26.jpg",
        "static/Images/homeSlides/IMG27.jpg",
        "static/Images/homeSlides/IMG28.jpg",
        "static/Images/homeSlides/IMG29.jpg",
        "static/Images/homeSlides/IMG30.jpg"
    ];

    imageUrls.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Add event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeImages();
    preloadImages();

    allImages.forEach((img) => {
        img.addEventListener('click', function(event) {
            openModal(this.src, this.alt, event);
        });
    });

    var prevButton = document.querySelector('.gallery-span:nth-child(1)');
    var nextButton = document.querySelector('.gallery-span:nth-child(4)');
    
    if (prevButton) prevButton.addEventListener('click', prevImage);
    if (nextButton) nextButton.addEventListener('click', nextImage);
    
    console.log('Event listeners added');
});
