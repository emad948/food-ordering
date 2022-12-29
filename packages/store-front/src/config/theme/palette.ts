import { colors, PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  primary: {
    main: '#0D0E10',
    contrastText: '#fff',
  },
  secondary: {
    main: '#F06A69',
    contrastText: '#fff',
  },
  text: {
    primary: '#222222',
  },
  warning: {
    contrastText: '#fff',
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  success: {
    contrastText: '#fff',
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: '#fff',
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  background: {
    default: '#fff',
    paper: '#fff',
  },
  divider: colors.grey[200],
};

export default palette;
