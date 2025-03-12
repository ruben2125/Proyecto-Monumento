<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto - Formulario PHPMailer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Formulario de Contacto</h1>
    <form id="contact-form" action="enviar.php" method="post">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="nombre" required>

      <label for="telefone">Teléfono:</label>
      <input type="text" id="name" name="telefono" required>

      <label for="mail">Mail:</label>
      <input type="text" id="name" name="mail" required>

      <label for="asunto">Asunto:</label>
      <textarea id="message" name="asunto" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
</body>
</html>