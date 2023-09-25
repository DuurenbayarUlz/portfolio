import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
  }
}

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
      fontSize: "54px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "65.93px",
    },
    h2: {
      fontSize: "48px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "58.61px",
    },
    h3: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "48.84px",
    },
    h6: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "19.53px",
    },
    subtitle1: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "28.63px",
    },
    body1: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "29.02px",
    },
    body2: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "19.53px",
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
