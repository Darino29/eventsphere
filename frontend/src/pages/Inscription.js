import React from 'react';
import { Container, Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';

const Inscription = () => {
  return (
    <Container
      component="main"
      sx={{
        height: '100vh',
        display: 'flex',
      }}
    >
      <Grid container>
        {/* Image à gauche */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/vecteurs-libre/concept-abstrait-du-systeme-controle-acces_335657-3180.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',  // Pour s'assurer que l'image occupe toute la hauteur
          }}
        />
        
        {/* Formulaire à droite */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Paper
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%', // Ajuster la largeur du formulaire
              maxWidth: '400px', // Limite de largeur pour que le formulaire ne soit pas trop grand
            }}
          >
            <Typography component="h1" variant="h5" gutterBottom>
              Inscription
            </Typography>
            <form noValidate style={{ width: '100%' }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nom"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Prénom"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Adresse e-mail"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Mot de passe"
                type="password"
                autoComplete="new-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirmer le mot de passe"
                type="password"
                autoComplete="new-password"
              />
              <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                S'inscrire
              </Button>
              <Grid container justifyContent="center" style={{ marginTop: '16px' }}>
                <Grid item>
                  <Link href="/login" variant="body2">
                    Vous avez déjà un compte ? Connectez-vous
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inscription;
