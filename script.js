// Toggle Navigation Menu on small screens
function toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}

// Initialize the slideshow
let currentSlide = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.display = "none";

    // Update the current slide index
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;

    // Show the new slide
    slides[currentSlide].style.display = "block";
}

// Initialize the slideshow by showing the first slide
window.onload = function() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].style.display = "block"; // Show the first slide
};

// Open lightbox and show clicked image
function openLightbox(index) {
    const slides = document.querySelectorAll('.slide');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    lightbox.style.display = 'flex';
    lightboxImg.src = slides[index].querySelector('img').src; // Get image source of clicked image
    currentSlide = index;

    // Hide the hamburger menu when lightbox is shown
    hamburgerMenu.style.display = 'none';
}

// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    // Show the hamburger menu again when the lightbox is closed
    hamburgerMenu.style.display = 'block';
}

// Change image in lightbox (previous/next)
function changeLightbox(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Update the current slide index
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;

    // Change the lightbox image
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = slides[currentSlide].querySelector('img').src;
}
