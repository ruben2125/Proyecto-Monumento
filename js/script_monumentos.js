// script_monumentos.js

let currentIndex = 0; // Índice de la imagen actual
const slides = document.querySelectorAll('.slide'); // Obtener todas las diapositivas
const totalSlides = slides.length; // Número total de imágenes

// Función para mostrar la diapositiva según el índice
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = -index * 100; // Calcular el desplazamiento
    slidesContainer.style.transform = `translateX(${offset}%)`; // Mover el contenedor de las imágenes
}

// Función para mover a la siguiente imagen
function moveSlide(direction) {
    currentIndex += direction;

    // Si la galería llega al final, vuelve al principio
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Mostrar la imagen correspondiente
    showSlide(currentIndex);
}

// Función para avanzar automáticamente cada cierto tiempo (5 segundos en este caso)
function autoSlide() {
    setInterval(() => {
        moveSlide(1); // Mover a la siguiente imagen automáticamente
    }, 5000); // Cambiar cada 5 segundos
}

// Iniciar el deslizador automático
autoSlide();

// Mostrar la primera imagen al cargar
showSlide(currentIndex);

// Agregar funcionalidad a los botones de las flechas
document.querySelector('.arrow.left').addEventListener('click', () => moveSlide(-1));
document.querySelector('.arrow.right').addEventListener('click', () => moveSlide(1));

// Agregar funcionalidad para las flechas del teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveSlide(-1); // Mover hacia atrás con la flecha izquierda
    } else if (event.key === 'ArrowRight') {
        moveSlide(1); // Mover hacia adelante con la flecha derecha
    }
});
