import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./configs/firebase";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes";
import { theme } from "./styles/theme";
import { UserProvider } from "./contexts/user";
import { MoodProvider } from "./contexts/moods";
import { SignIn } from "./pages/Auth/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MoodProvider>
          <BrowserRouter>
            router here
            <SignIn />
            <Router />
          </BrowserRouter>
        </MoodProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
