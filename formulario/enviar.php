<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar el autoloader de Composer
require '../libs/vendor/autoload.php';

// Verifica que el formulario haya sido enviado por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Comprobar que todos los campos requeridos están presentes
    if (
        isset($_POST['nombre'], $_POST['telefono'], $_POST['email'], $_POST['asunto'], $_POST['descripcion'])
        && !empty($_POST['nombre'])
        && !empty($_POST['telefono'])
        && !empty($_POST['email'])
        && !empty($_POST['asunto'])
        && !empty($_POST['descripcion'])
    ) {
        // Recoger los datos del formulario
        $nombre = $_POST['nombre'];
        $telefono = $_POST['telefono'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['descripcion'];

        // Crear una instancia de PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Configuración del servidor
            $mail->SMTPDebug = 0; // Cambia a SMTP::DEBUG_SERVER para ver detalles en desarrollo
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'castillolaguardiadejaen@gmail.com';
            $mail->Password   = 'kmcbojiixgkpcokn'; // Usa contraseña de aplicación si tienes 2FA
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            // Destinatarios
            $mail->setFrom('remitente@gmail.com', 'Solicitante Web');
            $mail->addAddress('castillolaguardiadejaen@gmail.com', 'Guía Monumentos');

            // Contenido
            $mail->isHTML(true);
            $mail->Subject = "Formulario de contacto: " . $asunto;
            $mail->Body    = "
                <strong>Nombre:</strong> $nombre<br>
                <strong>Teléfono:</strong> $telefono<br>
                <strong>Email:</strong> $email<br>
                <strong>Mensaje:</strong><br>$mensaje
            ";

            // Enviar correo
            $mail->send();

            // Redirigir a una página de confirmación
            header("Location: formularioalta.html");
            exit;

        } catch (Exception $e) {
            echo "El mensaje no se pudo enviar. Error de Mailer: {$mail->ErrorInfo}";
        }

    } else {
        echo "Por favor, completa todos los campos requeridos.";
    }

} else {
    echo "Acceso no permitido.";
}
?>