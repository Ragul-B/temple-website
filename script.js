// Toggle Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    menu.classList.toggle('active');
}

// Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Toggle "See More" Popup Card
function toggleMore() {
    const moreText = document.getElementById('more-text');
    moreText.style.display = (moreText.style.display === 'block') ? 'none' : 'block';
}

// Zoom In/Out Functionality
const zoomButtons = document.querySelectorAll('.zoom-btn');
zoomButtons.forEach(button => {
    button.addEventListener('click', function () {
        const body = document.body;
        if (this.textContent === 'A+') {
            body.classList.remove('zoomed-out');
            body.classList.add('zoomed-in');
        } else {
            body.classList.remove('zoomed-in');
            body.classList.add('zoomed-out');
        }
    });
});

// Lightbox Functionality
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

let lightboxIndex = 1;
showLightboxSlides(lightboxIndex);

function changeSlide(n) {
    showLightboxSlides(lightboxIndex += n);
}

function currentSlide(n) {
    showLightboxSlides(lightboxIndex = n);
}

function showLightboxSlides(n) {
    const slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) { lightboxIndex = 1 }
    if (n < 1) { lightboxIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[lightboxIndex - 1].style.display = "block";
}

// Improved close button detection for lightbox
document.querySelector('.lightbox .close').addEventListener('click', closeLightbox);
// Scroll fix for lightbox images
document.querySelector('.lightbox-content').addEventListener('touchmove', function (e) {
    e.stopPropagation();
});


// Scroll Header Effect
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

document.getElementById("view-more").addEventListener("click", function() {
    const extraImages = document.getElementById("extra-images");
    extraImages.style.display = "flex";
    this.style.display = "none"; // Hide the "View More" button after showing images
  });
  
