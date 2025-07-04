import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';


const Jumbotron = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Typography variant="h3" gutterBottom>
        Bienvenido a mi sitio
      </Typography>
      <Typography variant="h6" gutterBottom>
        Este es un Jumbotron hecho con Material UI.
        Un jumbotron, en el contexto web, se refiere a un elemento de diseño que ocupa todo el ancho de la pantalla y se utiliza para destacar contenido importante
      </Typography>
      <Box textAlign="center">
        <Button variant="contained" color="primary">
          Call to action
        </Button>
      </Box>
    </Paper>
  );
};

export default Jumbotron;
