import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
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
  status: {
    danger: "#faf910",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
  },
});
