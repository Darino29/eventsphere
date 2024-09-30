import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Avatar } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import bgHome from '../../images/image1.jpg'; 

const Inscription = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nom, prenom, email, password });
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

      
      <Container
        component="main"
        maxWidth="xs"
        className="reveal"
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
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="textPrimary">
            Inscription
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nom"
              label="Nom"
              name="nom"
              autoComplete="nom"
              autoFocus
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="prenom"
              label="Prénom"
              name="prenom"
              autoComplete="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                className="bn5" 
                sx={{ mt: 3, mb: 2, color: '#fff', padding: '0.6em 2em', fontSize: '16px' }} 
                                >
                Inscription
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              Vous avez déjà un compte ? 
              <Button href="/connexion" className="bn6" sx={{ ml: 1, color: '#1E2853', textTransform: 'none' }}>
                Connectez-vous
              </Button>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Inscription;
