<?php
session_start();

var_dump($_POST);
var_dump($_SESSION); 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez les données du formulaire
    $name = $_POST["firstname"];
    $subject = $_POST["sujet"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validez les données (ajoutez des règles de validation supplémentaires au besoin)
    if (empty($name) || empty($subject) || empty($email) || empty($message)) {
        $_SESSION['error'] = "Tous les champs doivent être remplis.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = "Adresse e-mail invalide.";
    } else {
        // Adresse e-mail de destination
        $to = "contact@salahsafsaf.art";

        // Sujet de l'e-mail
        $email_subject = "Nouveau message de $name: $subject";

        // Corps de l'e-mail
        $email_body = "Nom: $name\n";
        $email_body .= "Sujet: $subject\n";
        $email_body .= "E-mail: $email\n";
        $email_body .= "Message:\n$message";

        // En-têtes de l'e-mail
        $headers = "From: $email";

        // Envoi de l'e-mail
        if (mail($to, $email_subject, $email_body, $headers)) {
            $_SESSION['success'] = "Hermes looks after your message, Merci 🫶";
        } else {
            $_SESSION['error'] = "Une erreur est survenue lors de l'envoi de votre message.";
        }
    }
    // Rediriger l'utilisateur vers la page du formulaire avec le message de succès ou d'erreur
    header("Location: http://salahsafsaf.art/contact.html?success=" . (isset($_SESSION['success']) ? 'true' : 'false'));
} else {
    // Rediriger l'utilisateur vers la page du formulaire si la méthode HTTP n'est pas POST
    header("Location: http://salahsafsaf.art/contact.html");
}
?>
