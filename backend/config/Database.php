<?php
// dbConfig.php

// Informations de connexion à la base de données
$host = 'localhost'; // Adresse du serveur MySQL
$user = 'root';      // Nom d'utilisateur MySQL
$password = '';      // Mot de passe MySQL
$database = 'EventSphere'; // Nom de la base de données

// Connexion à MySQL avec MySQLi
$conn = new mysqli($host, $user, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}

echo "Connexion réussie à la base de données";
?>
