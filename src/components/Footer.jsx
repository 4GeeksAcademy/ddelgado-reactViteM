import { Paper, Typography, Box } from '@mui/material';


const Footer = () => {
  return (
    <Paper 
      sx={{ 
        mt: 'auto', 
        py: 2, 
        px: 2, 
        backgroundColor: '#f5f5f5' 
      }} 
      component="footer"
    >
      <Typography variant="body2" color="textSecondary" align="center">
        © 2025 Tu Empresa. Todos los derechos reservados.
      </Typography>
    </Paper>
  );
};
export default Footer;