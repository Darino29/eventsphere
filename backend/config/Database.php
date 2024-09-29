<?php
// dbConfig.php

// Configuration de la base de données
$host = 'localhost'; 
$user = 'root';      
$password = '';      
$database = 'Eventsphere'; 

// Connexion à MySQL avec PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$database", $user, $password);
    // Configuration de PDO pour afficher les erreurs
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>