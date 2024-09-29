import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';  // Import de la page d'accueil
import Inscription from './pages/Inscription';
import Login from './pages/Login';
import Parametres from './pages/Parametres';
import Erreur from './pages/Erreur';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route pour la page d'accueil */}
                <Route path="/" element={<Accueil />} />
                
                {/* Routes pour les autres pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/Inscription" element={<Inscription />} />
                <Route path="/Parametres" element={<Parametres />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
        </Router>
    );
}

export default App;
