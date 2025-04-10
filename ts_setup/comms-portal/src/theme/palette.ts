import { PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
  primary: {
    main: '#3f37c9',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#df2935', 
    dark: 'rgb(88, 107, 147)',
    light: 'rgb(254, 174, 8, 1)'
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
  divider: '#CED8DE',
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
