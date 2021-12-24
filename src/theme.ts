import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#308f00",
    },
    warning: {
      light: "rgb(299 155 40)",
      main: "#fa7910",
      dark: "#da5910",
    },
  },
  colors: {
    // yellow: "#faf910",
    // red: "#fa3040",
  },
  typography: {
    // fontFamily: [
    //   "-apple-system",
    //   "BlinkMacSystemFont",
    //   '"Segoe UI"',
    //   "Roboto",
    //   '"Helvetica Neue"',
    //   "Arial",
    //   "sans-serif",
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(","),
    fontFamily: "Quicksand",
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    body1: {
      fontFamily: "Arial",
    },
  },
});

let customTypography = createTheme({
  typography: {
    fontFamily: "Quicksand",
  },
}).typography;

theme = createTheme(theme, {
  typography: customTypography,
});

export { theme };
