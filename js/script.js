document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    
    // Comprobar si las cookies ya fueron aceptadas en esta sesión
    if (sessionStorage.getItem('cookiesAccepted') !== 'true') {
        cookieBanner.style.display = 'block';
    }

    document.getElementById('accept-cookies').addEventListener('click', function() {
        sessionStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    document.getElementById('reject-cookies').addEventListener('click', function() {
        sessionStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});

