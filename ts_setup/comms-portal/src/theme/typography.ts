import { Palette } from "@mui/material/styles";
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createTheme } from "@mui/system";

const breakpointDefs = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200
  },
};
export const breakpoints = createTheme({ breakpoints: breakpointDefs }).breakpoints;


export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: '"Ubuntu", sans-serif',
  h1: {
    fontSize: "2rem",
    lineHeight: 1,
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.9rem",
    lineHeight: 1,
    fontWeight: 500,
  },
  h3: {
    fontSize: "1.6rem",
    fontWeight: 300,
    lineHeight: 1,
  },
  h4: {
    fontSize: "1.3rem",
    lineHeight: 1,
    fontWeight: 300
  },
  h5: {
    fontSize: "1.1rem",
    fontWeight: 300
  },
  h6: {
    fontWeight: 300
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    fontSize: "1rem",
    fontWeight: 400,
  },
  caption: {
    fontSize: "0.7rem",
    fontWeight: 500,
  }
}

