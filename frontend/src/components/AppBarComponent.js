import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo-nbg.png';

const AppBarComponent = () => {
  return (
    <AppBar
      position="absolute" // Placer l'AppBar au-dessus du contenu avec une position  absolue
      sx={{
        backgroundColor: 'transparent', // AppBar transparente
        boxShadow: 'none', // Retirer l'ombre par défaut
      }}
    >
      <Toolbar>
      <img
          src={logo}
          alt="Logo Event Sphere"
          style={{ width: '50px', height: '40px', marginRight: '15px' }} // Ajustez la taille si nécessaire
        />
        <Typography variant="h6" className='reveal' sx={{ flexGrow: 1, color: 'white' }}>
          Event Sphere
        </Typography >
        
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
