<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Validar campos requeridos
if (
    empty($_POST["name"]) ||
    empty($_POST["email"]) ||
    empty($_POST["subject"]) ||
    empty($_POST["message"])
) {
    echo json_encode([
        "status" => "error",
        "message" => "Todos los campos son requeridos",
    ]);
    exit();
}

// Datos del formulario
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Configuración del email
//$to = "info@dagarsoluciones.com.co";
$to = "elkincano@gmail.com";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Cuerpo del email
$email_content = "
<html>
<head><title>Nuevo mensaje de contacto</title></head>
<body>
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Asunto:</strong> $subject</p>
    <p><strong>Mensaje:</strong></p>
    <p>$message</p>
</body>
</html>
";

// Enviar email
$mail_sent = mail($to, "Nuevo contacto: $subject", $email_content, $headers);

if ($mail_sent) {
    echo json_encode([
        "status" => "success",
        "message" => "Mensaje enviado correctamente",
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Error al enviar el mensaje",
    ]);
}
