import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo-nbg.png';

const AppBarConnecte = () => {
  return (
    <AppBar
      position="static" // Placer l'AppBar au-dessus du contenu avec une position absolue
      sx={{
        backgroundColor: '#1E2853', // AppBar transparente
        boxShadow: 'none', // Retirer l'ombre par défaut
      }}
    >
      <Toolbar>
      <img
          src={logo}
          alt="Logo Event Sphere"
          style={{ width: '50px', height: '40px', marginRight: '15px' }} // Ajustez la taille si nécessaire
        />
        <Typography variant="h8" className='reveal' sx={{ flexGrow: 1, color: 'white' }}>
          Bonjour M.test
        </Typography >
        
        <Button style={{ color: 'white', textTransform: 'none' }}> 
          Se déconnecter
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default AppBarConnecte;
