// Configuración del deslizador de imágenes
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000);  // Cambia de imagen cada 5 segundos

// Mostrar la primera imagen al cargar
showSlide(currentIndex);
