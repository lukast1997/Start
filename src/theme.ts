import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Definisanje primarne boje
    },
    secondary: {
      main: '#dc004e', // Definisanje sekundarne boje
    },
    background: {
      default: '#f4f4f4', // Definisanje osnovne boje pozadine
    },
    text: {
      primary: '#333', // Osnovna boja teksta
      secondary: '#555', // Sekundarna boja teksta
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Postavljanje osnovne porodice fontova
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8, // Postavljanje osnovnog spacing-a
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // Uklanjanje podvlačenja sa linkova
          color: '#FFFFFF', // Koristi osnovnu boju teksta
          '&:hover': {
            textDecoration: 'underline', // Dodaj podvlačenje pri hover-u
          },
        },
      },
    },
  },
});

export default theme;
