document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Función para ocultar el banner
    function hideBanner() {
        cookieBanner.style.display = 'none';
    }

    // Mostrar el banner al cargar la página
    cookieBanner.style.display = 'block';

    // Evento para el botón de aceptar
    acceptButton.addEventListener('click', function() {
        alert('Has aceptado las cookies.');
        hideBanner();
    });

    // Evento para el botón de rechazar
    rejectButton.addEventListener('click', function() {
        alert('Has rechazado las cookies.');
        hideBanner();
    });
});
