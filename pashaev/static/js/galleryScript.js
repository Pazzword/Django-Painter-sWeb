var currentImageIndex = 0;
var images = document.querySelectorAll(".image-gallery .image, .white-frame .image");
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
    var currentRotation = parseInt(modalImg.dataset.rotation || "0");
    currentRotation -= 90;
    modalImg.style.transform = "rotate(" + currentRotation + "deg)";
    modalImg.dataset.rotation = currentRotation;
}

function rotateRight() {
    var modalImg = document.getElementById("modalImg");
    var currentRotation = parseInt(modalImg.dataset.rotation || "0");
    currentRotation += 90;
    modalImg.style.transform = "rotate(" + currentRotation + "deg)";
    modalImg.dataset.rotation = currentRotation;
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
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

preloadImages();
