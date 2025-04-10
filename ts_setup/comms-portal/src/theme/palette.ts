import { PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
  primary: {
    main: 'rgba(41,60,85, 1)',
    contrastText: '#ffffff',
  },
  secondary: {
    main: 'rgba(37, 0, 254, 1)', // same blue as in ES1TP logo
  },
  background: {
    paper: '#f5f5f5',       // light gray for some boxes
    default: '#ffffff',
  },
  text: {
    primary: '#212529',
    secondary: '#65748B',
    disabled: 'rgba(55, 65, 81, 0.48)'
  },
  success: {
    main: '#2e7D32',
    contrastText: '#FFFFFF'
  },
  info: {
    main: '#2196F3',
    light: '#64B6F7',
    dark: '#0B79D0',
    contrastText: '#FFFFFF'
  },
  warning: {
    main: '#FFB020',
    light: '#FFBF4C',
    contrastText: '#000000'
  },
  error: {
    main: '#D32F2F',
    contrastText: '#FFFFFF'
  },

}
