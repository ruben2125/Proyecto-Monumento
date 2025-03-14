function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function showCookieConsent() {
    if (!getCookie('cookieConsent')) {
        var consentHTML = `
            <div id="cookieConsent" style="position: fixed; bottom: 0; width: 100%; background-color: #f1f1f1; padding: 20px; text-align: center; z-index: 9999;">
                <p>Este sitio web utiliza cookies. Al continuar navegando, aceptas su uso. 
                <a href="politica-de-cookies.html" target="_blank">Más información</a></p>
                <button onclick="acceptCookies()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">Aceptar</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', consentHTML);
    }
}

function acceptCookies() {
    setCookie('cookieConsent', 'accepted', 365);
    document.getElementById('cookieConsent').style.display = 'none';
}

window.onload = showCookieConsent;