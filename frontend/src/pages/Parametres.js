import React, { useState } from "react";
import AppBarComponent from '../components/AppBarConnecte';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Container,
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle
} from "@mui/material";


const Parametres = () => {
  const [open, setOpen] = useState(false);

  // Fonction pour ouvrir le Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Fonction pour fermer le Dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Fonction pour confirmer la suppression
  const handleConfirmDelete = () => {
    // Ajoutez ici la logique de suppression
    console.log("Compte supprimé");
    setOpen(false); // Ferme la popup après confirmation
  };

  return (
    <div>
    <AppBarComponent/>
    
    <Container sx={{ mt: 4 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} xl={8}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mes informations
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    id="nom"
                    label="Nom"
                    placeholder="Entrez votre nom"
                    defaultValue="TestNom"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    id="prenom"
                    label="Prénom"
                    placeholder="Entrez votre prénom"
                    defaultValue="TestPrenom"
                  />
                </Grid>
    
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    placeholder="Entrez votre addresse email"
                    defaultValue="test@example.com"
                  />
                </Grid>
              </Grid>

              <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Mot de passe
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    required
                    id="mdp"
                    label="Mot de passe actuel"
                    placeholder="Entrez votre mot de passe actuel"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    required
                    id="new_mdp"
                    label="Nouveau mot de passe"
                    placeholder="Entrez votre nouveau mot de passe"
                  />
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button type="submit" variant="contained" color="primary">
                  Mettre à jour mes données
                </Button>
              </Box>            
              <Typography variant="p" mb={3} >
                
              </Typography>
              <Box mt={3}>
                <Button variant="outlined" color="error" onClick={handleClickOpen}>
                  Supprimer le compte
                </Button>
              </Box>
            </form>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Container>
    {/* Dialog de confirmation de suppression */}
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Parametres;

