import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./configs/firebase";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { theme } from "./theme";
import { UserProvider } from "./contexts/user";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
