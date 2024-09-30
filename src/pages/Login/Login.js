import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import bgHome from '../../images/image1.jpg'; 

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

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
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          zIndex: 1,
        }}
      />

      {/* Contenu du formulaire */}
      <Container 
        component="main"
        maxWidth="xs"
        className='reveal'
        sx={{
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="textPrimary">
            Connexion
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                className="bn5" // Ajout de la classe bn5
                sx={{ mt: 3, mb: 2, color: '#fff', padding: '0.6em 2em', fontSize: '16px' }} // Garde les marges et le texte blanc
                                >
                Connexion
            </Button>

            <Typography variant="body2" color="textSecondary" align="center">
              Vous n'avez pas de compte ? 
              <Button href="/inscription" className="bn6" sx={{ ml: 1, color: '#1E2853', textTransform: 'none' }}>
                Inscrivez-vous
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Connexion;
