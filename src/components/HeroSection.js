import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import bgHome from '../images/image1.jpg';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${bgHome})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      {/* Overlay (Filtre sombre pour améliorer la lisibilité du texte) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Filtre foncé
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" className="reveal">
        Bienvenue sur notre planète
      </Typography>
      <Typography variant="h6" className="reveal" sx={{ mt: 2 }}>
        Donnez vie à vos événements ! 🎉
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button className="bn5" size="large" startIcon={<EditTwoToneIcon/>} sx={{ m: 2 ,fontSize: '0.7rem',  color: '#D6E5FB'}}>
            Créer
          </Button>
          <Button className="bn5" size="large" startIcon={<ExploreTwoToneIcon/>} sx={{ m: 2 ,fontSize: '0.7rem', color: '#D6E5FB'}}>
            Explorer
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
