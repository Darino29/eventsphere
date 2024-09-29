-- Création de la base de données
CREATE DATABASE EventSphere;
USE EventSphere;

-- Table des utilisateurs
CREATE TABLE Utilisateurs (
    id_utilisateur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('utilisateur', 'administrateur') NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Enregistrement de la date d'inscription
);

-- Table des événements
CREATE TABLE Evenements (
    id_evenement INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    heure TIME NOT NULL,
    lieu VARCHAR(255) NOT NULL,
    description TEXT,
    participants_max INT NOT NULL,
    id_administrateur INT,
    FOREIGN KEY (id_administrateur) REFERENCES Utilisateurs(id_utilisateur) ON DELETE SET NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Enregistrement de la date de création
);

-- Table pour les inscriptions
CREATE TABLE Inscriptions (
    id_inscription INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT,
    id_evenement INT,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id_utilisateur) ON DELETE CASCADE,
    FOREIGN KEY (id_evenement) REFERENCES Evenements(id_evenement) ON DELETE CASCADE,
    UNIQUE (id_utilisateur, id_evenement) -- Assure qu'un utilisateur ne peut s'inscrire qu'une seule fois à un événement
);

-- Index pour optimiser les requêtes
CREATE INDEX idx_utilisateur ON Inscriptions(id_utilisateur);
CREATE INDEX idx_evenement ON Inscriptions(id_evenement);

-- Optionnel : ajout de données d'exemple
-- Administrateur
INSERT INTO Utilisateurs (nom, prenom, email, mot_de_passe, role) VALUES ('Dupont', 'Jean', 'jean.dupont@example.com', 'motdepassehashe', 'administrateur');

-- Utilisateur
INSERT INTO Utilisateurs (nom, prenom, email, mot_de_passe, role) VALUES ('Martin', 'Claire', 'claire.martin@example.com', 'motdepassehashe', 'utilisateur');

-- Événement
INSERT INTO Evenements (titre, date, heure, lieu, description, participants_max, id_administrateur) VALUES ('Conférence Tech', '2024-10-15', '09:00:00', 'Salle de Conférence A', 'Conférence sur les nouvelles technologies.', 100, 1);

-- Inscription à un événement
INSERT INTO Inscriptions (id_utilisateur, id_evenement) VALUES (2, 1);