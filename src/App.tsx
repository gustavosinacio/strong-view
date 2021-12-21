import { Button, Typography, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Link } from "./App.styles";

export function App() {
  const theme = useTheme();

  console.log(9821, theme);

  return (
    <div style={{}}>
      <Typography>Strong View</Typography>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <Link to="/home">
            <Button size="large" variant="outlined" color="warning">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button size="large" variant="outlined" color="primary">
              About
            </Button>
          </Link>
          <Link to="/testgrounds">
            <Button size="large" variant="outlined" color="primary">
              Testgrounds
            </Button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
