import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./configs/firebase";

import { ThemeProvider } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Router } from "./routes/routes";
import { theme } from "./styles/theme";
import { MoodProvider } from "./contexts/moods";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MoodProvider>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </MoodProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
