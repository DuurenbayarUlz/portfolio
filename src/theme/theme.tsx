import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 500,
    },
    h3: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 300,
    },
    body2: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 300,
    },
  },
});

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
