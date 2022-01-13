import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./configs/firebase";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { theme } from "./styles/theme";
import { UserProvider } from "./contexts/user";
import { MoodProvider } from "./contexts/moods";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MoodProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MoodProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
