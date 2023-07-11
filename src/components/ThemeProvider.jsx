import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D1D1D1;",
      contrastText: "#D1D1D1",
    },
    secondary: {
      main: "#FFF",
      light: "#FFF",
      dark: "#FFF",
      contrastText: "#010101",
    },
    tertiary: {
      main: "#E42433",
      light: "#E42433",
      dark: "#E42433",
      contrastText: "#FFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "36px",
      fontWeight: 500,
      textTransform: "uppercase",
      color: "#D1D1D1",
      letterSpacing: "3px",
      "@media (max-width:600px)": {
        fontSize: "75px",
        lineHeight: "100%",
      },
    },
    h2: {
      fontFamily: "Poppins, Sans-serif",
      fontSize: "60px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "150%",
      textTransform: "none",
      color: "#D1D1D1",
      "@media (max-width:600px)": {
        fontSize: "32px",
        lineHeight: "90%",
      },
    },
    h3: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "120%",
      color: "#D1D1D1",
      "@media (max-width:600px)": {
        fontSize: "28px",
        lineHeight: "80%",
      },
    },
    h4: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "120%",
      color: "#D1D1D1",
      "@media (max-width:600px)": {
        fontSize: "28px",
        lineHeight: "80%",
      },
    },

    body1: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      color: "#D1D1D1",
      lineHeight: "200%",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body2: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "150%",
      color: "#D1D1D1",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body3: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "150%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body4: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "150%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "120%",
      },
    },

    body5: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "150%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },
    button: {
      fontFamily: "Roboto Mono, sans-serif",
      fontSize: "16px",
      fontWeight: 500,
      textTransform: "none",
    },
  },
});
