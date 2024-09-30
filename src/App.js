import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBarComponent from './components/AppBarComponent';
import HeroSection from './components/HeroSection';
import Inscription from './pages/SignUp/Signup'; // Assurez-vous que ce composant existe
import Connexion from './pages/Login/Login'; // Assurez-vous que ce composant existe

const App = () => {
  return (
    <Router>
      <div>
        <AppBarComponent />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
