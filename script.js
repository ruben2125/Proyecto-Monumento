// Esperamos que el contenido de la página se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Revisamos si ya se aceptaron las cookies
    if (localStorage.getItem('cookies-accepted') === 'true') {
        // Si ya se aceptaron, ocultamos el banner
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        // Si no se aceptaron, mostramos el banner
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Evento para aceptar las cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        // Guardamos en localStorage que el usuario aceptó las cookies
        localStorage.setItem('cookies-accepted', 'true');
        // Ocultamos el banner
        document.getElementById('cookie-banner').style.display = 'none';
    });
});
