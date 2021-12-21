import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
